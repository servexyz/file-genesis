/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:13-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-26T15:37:33-08:00
 */

const fs = require("fs-extra");
const chalk = require("chalk");
const path = require("path");
const paths = require("../config/paths.js");
const empty = require("is-empty");
const log = console.log;
const db = paths.DB_CONFIG;
const { template } = require("content-genesis");
const { basename, updateDatabase } = require("./helpers.js");

////////////////////////////////////////////////////
// Create Files
////////////////////////////////////////////////////

//TODO: Create helper function to simplify fs callback error handling
function cFilePlain(filename, content) {
  if (empty(content)) {
    fs.ensureFile(filename, err => {
      if (err) {
        log(`cFilePlain failed. ${chalk.red(err)}`);
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
function cFileTemplate(filename, content) {}
