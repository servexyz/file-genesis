/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:13-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-26T16:49:45-08:00
 */

const fs = require("fs-extra");
const chalk = require("chalk");
const path = require("path");
const paths = require("../config/paths.js");
const empty = require("is-empty");
const log = console.log;
const db = paths.DB_CONFIG;
const { basename, updateDatabase } = require("./helpers.js");

////////////////////////////////////////////////////
// Create Files
////////////////////////////////////////////////////

//TODO: Create helper function to simplify fs callback error handling
function cFilePlain(filename, content) {
  if (empty(content)) {
    fs.ensureFile(filename, err => {
      if (err) {
        log(`cFileEmpty failed. ${chalk.red(err)}`);
      } else {
        log(
          `Created file${chalk.yellow("<empty>")}:\n ${chalk.blue(filename)}`
        );
        updateDatabase(db, filename, "file.empty.last");
      }
    });
  } else {
    fs.outputFile(filename, content, err => {
      if (err) {
        log(`cFilePlain failed. ${chalk.red(err)}`);
      } else {
        log(
          `Created file${chalk.yellow("<plain>")}:\n ${chalk.blue(filename)}`
        );
        updateDatabase(db, filename, "file.plain.last");
      }
    });
  }
}

function cFileSymlink(sourcePath, destinationPath) {
  fs.ensureSymlink(sourcePath, destinationPath, err => {
    if (err) {
      log(`Failed to create symlink. ${chalk.red(err)}`);
    } else {
      log(
        `Created file${chalk.yellow("<symlink>")}:\n ${chalk.blue(
          destinationPath
        )}`
      );
      updateDatabase(db, destinationPath, "file.symlink.last");
    }
  });
}
function cFileTemplate(filename, content) {
  //content.template && content.variables
  const { template } = require("content-genesis");
  log("content.template", content.template);
  log(`content.template: \n ${content.template}`);
  log("content.variables", content.variables);
  log(`content.variables: \n ${content.variables}`);
  let templateContent = template(content.template, content.variables);
  fs.outputFile(filename, templateContent, err => {
    if (err) {
      log(`cFileTemplate failed. ${chalk.red(err)}`);
    } else {
      log(
        `Created file${chalk.yellow("<template>")}:\n ${chalk.blue(filename)}`
      );
      updateDatabase(db, filename, "file.template.last");
    }
  });
}

module.exports = {
  cFilePlain,
  cFileSymlink,
  cFileTemplate
};
