/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:13-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-11T16:17:20-08:00
 */

const fs = require("fs-extra");
const chalk = require("chalk");
const path = require("path");
const log = console.log;

const { C_HISTORY } = require("../config/paths.js");
const db = require(path.join(__dirname, "./db.js"))(C_HISTORY);

// https://www.npmjs.com/package/fs-extra
/***************************************************
Helper functions
***************************************************/
function basename(filepath) {
  return String(path.basename(filepath));
}

function prCreateFile(name, content) {
  return new Promise((resolve, reject) => {
    fs.writeFile(name, content, "utf8", err => {
      if (err) {
        reject(err);
      } else {
        resolve(name);
      }
    });
  });
  log(`Name: ${name}`);
  let createdFile = String(path.basename(name));
  db.set("file.last", createdFile).write();
}

////////////////////////////////////////////////////
// Creator helper methods
////////////////////////////////////////////////////
function cFilePlain(filename, content) {
  prCreateFile(filename, content)
    .then(name => {
      log(`Created ${chalk.blue(name)}`);
      return name;
    })
    .catch(err => {
      log(`cFilePlain failed. ${chalk.red(err)}`);
    });
}

function cFileSymlink(destinationPath, sourcePath) {
  fs.symlink(sourcePath, destinationPath, err => {
    if (err) {
      log(`Failed to create symlink. ${chalk.red(err)}`);
    } else {
      log(`Created symlink ${chalk.blue(destinationPath)}`);
      return destinationPath;
    }
  });
}

function cFileTemplate(filename, content) {}

////////////////////////////////////////////////////
// Detailed API exposed functions
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

//TODO: Create "uFile" function which updates permissions and/or ownership

module.exports = {
  createFile: cFile,
  deleteFiles: dFiles,
  utilBasename: basename
};
