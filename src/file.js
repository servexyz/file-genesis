/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:13-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-24T10:03:36-08:00
 */

const fs = require("fs-extra");
const chalk = require("chalk");
const path = require("path");
const paths = require("../config/paths.js");
const log = console.log;
const db = paths.DB_CONFIG;

const { basename, updateDatabase } = require("./helpers.js");

////////////////////////////////////////////////////
// Create Files
////////////////////////////////////////////////////

function cFilePlain(filename, content) {
  fs.ensureFile(filename, err => {
    if (err) {
      log(`cFilePlain failed. ${chalk.red(err)}`);
    } else {
      log(`Created file${chalk.yellow("<plain>")}:\n ${chalk.blue(filename)}`);
      updateDatabase(db, filename, "file.plain.last");
    }
  });
}

function cFileSymlink(destinationPath, sourcePath) {
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
function cFileTemplate(filename, content) {}

////////////////////////////////////////////////////
// Detailed API
////////////////////////////////////////////////////
function cFile(where, what, type) {
  switch (type) {
    case "plain":
      /*
        @@where = file path + name;
        @@what = file content (UTF-8)
      */
      return cFilePlain(where, what);
    case "symlink":
      /*
        @@where = destination path;
        @@what = source path;
      */
      return cFileSymlink(where, what);
    case "template":
      return cFileTemplate(where, what);
    default:
      log("Please specify file type.");
      break;
  }
}

module.exports = {
  createFile: cFile
};
