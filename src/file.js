/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:13-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-09T20:33:25-08:00
 */

const fs = require("fs");
const chalk = require("chalk");
const path = require("path");
const log = console.log;

const { D_HISTORY } = require("../config/paths.js");
const db = require(path.join(__dirname, "./db.js"))(D_HISTORY);

/***************************************************
Helper functions
***************************************************/
function prCreateFile(name, content) {
  // Will create file in cwd unless path is specified in filename
  return new Promise((resolve, reject) => {
    fs.writeFile(name, content, "utf8", err => {
      if (err) {
        reject(err);
      } else {
        resolve(name);
      }
    });
  });
  let createdFile = String(path.basename(filename));
  db.set("file.last", createdFile).write();
}
function prCreateSymlink(target, destination) {
  return new Promise((resolve, reject) => {
    fs.symlink(target, destination, err => {
      if (err) {
        reject(err);
      } else {
        resolve(destination);
      }
    });
  });
}

/***************************************************
Creator Functions
***************************************************/
// Helpers
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

function cFileConfig(filename, config) {}
function cFileTemplate(filename, content) {}
function cFileSymlink(target, destination) {}

//Primary
function cFile(name, content, type) {
  switch (type) {
    case "plain":
      return cFilePlain(name, content);
    case "symlink":
      return cFileSymlink(name, content);
    case "template":
      return cFileTemplate(name, content);
    case "config":
      return cFileConfig(name, content);
    default:
      log("Please specify file type.");
      break;
  }
}

function dFile(names) {
  deleteFile([...name], (err, deleted) => {
    if (err) {
      log(
        `Failed to delete ${chalk.blue(JSON.stringify(names))}. ${chalk.red(
          err
        )}`
      );
      return false;
    } else {
      log(`Succeeded in deleting ${chalk.blue(JSON.stringify(names))}`);
      return true;
    }
  });
}

//TODO: Create "uFile" function which updates permissions and/or ownership

module.exports = {
  createFile: cFile
};
