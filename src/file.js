/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:13-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-12T08:17:33-08:00
 */

const fs = require("fs-extra");
const chalk = require("chalk");
const path = require("path");
const log = console.log;

const { C_HISTORY } = require("../config/paths.js");
const db = require(path.join(__dirname, "./db.js"))(C_HISTORY);

////////////////////////////////////////////////////
// Utilities
////////////////////////////////////////////////////

function basename(filepath) {
  return String(path.basename(filepath));
}

//TODO: Create "uFile" function which updates permissions and/or ownership

function updateDatabase(filepath, dbkey) {
  let lastUpdate = String(path.basename(filepath));
  try {
    db.set(dbkey, lastUpdate).write();
    return lastUpdate;
  } catch (err) {
    log(`Failed to update LowDB. ${chalk.red(err)}`);
    return false;
  }
}
////////////////////////////////////////////////////
// Create Files
////////////////////////////////////////////////////

function cFilePlain(filename, content) {
  fs.ensureFile(filename, err => {
    if (err) {
      log(`cFilePlain failed. ${chalk.red(err)}`);
    } else {
      log(`Created ${chalk.blue(filename)}`);
      updateDatabase(filename, "file.plain.last");
      // let createdFile = String(path.basename(filename));
      // db.set("file.plain.last", createdFile).write();
      // return createdFile;
    }
  });
}

function cFileSymlink(destinationPath, sourcePath) {
  fs.ensureSymlink(sourcePath, destinationPath, err => {
    if (err) {
      log(`Failed to create symlink. ${chalk.red(err)}`);
    } else {
      log(`Created symlink ${chalk.blue(destinationPath)}`);
      let createdFile = String(path.basename(destinationPath));
      db.set("file.symlink.last", createdFile);
      return createdFile;
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

function dFiles(...filepaths) {
  let listOfDeletedFilepaths = [];
  filepaths.map(file => {
    fs.unlink(file, err => {
      if (error) {
        log(`Failed to remove file ${chalk.blue(file)}`);
      } else {
        listOfDeletedFilepaths.push(file);
        log(`Deleted file ${chalk.blue(file)}`);
      }
    });
  });
}

module.exports = {
  createFile: cFile,
  deleteFiles: dFiles,
  utilBasename: basename
};
