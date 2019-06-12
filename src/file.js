/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-27T12:24:30-08:00
 * @Email:  me@alechp.com
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-27T16:54:27-08:00
 */

const log = console.log;
const chalk = require("chalk");
const fs = require("fs-extra");
const { fluent } = require("./helpers.js");

let File = filepath => {
  this.filepath = filepath;
  return {
    plain: content => {
      fs.outputFile(this.filepath, content, err => {
        if (err) {
          log(
            `Failed to output ${chalk.yellow("<plain>")} file: ${chalk.yellow(
              this.filepath
            )} \n ${chalk.red(err)}`
          );
        }
      });
    },
    symlink: origin => {
      fs.ensureSymlink(origin, this.filepath, err => {
        if (err) {
          log(
            `Failed to output ${chalk.yellow("symlink")} file: ${chalk.yellow(
              this.filepath
            )} \n ${chalk.red(err)}`
          );
        }
      });
    },
    template: (original, variables) => {
      //TODO: Play around with async/await
      const { template } = require("content-genesis");
      let templateContent = template(original, variables);
      log(`templateContent: ${chalk.blue(templateContent)}`);
      fs.outputFile(this.filepath, templateContent, err => {
        if (err) {
          log(`Failed to duplicate template. \n ${chalk.red(err)}`);
          return err;
        }
      });
    }
  };
};

module.exports = {
  File
};
