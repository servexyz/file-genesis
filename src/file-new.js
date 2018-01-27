/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-27T12:24:30-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-27T14:05:01-08:00
 */

const log = console.log;
const chalk = require("chalk");
const fs = require("fs-extra");
const { fluent } = require("./helpers.js");
const { template } = require("content-genesis");

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
    }
  };
};

module.exports = {
  File
};
