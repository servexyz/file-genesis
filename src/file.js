/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:13-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-10T13:55:43-08:00
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
function basename(filepath) {
  return String(path.basename(filepath));
}
function canCreateFileHere(filepath) {
  fs.access(filepath, err => {
    if (err) {
      if (err.code === "ENOENT") {
        console.log("File doesn't already exist. You may create it.");
        return Boolean(true);
      }
      throw err;
    } else {
      log(`File already exists. Abort.`);
      return Boolean(false);
    }
  });
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
function prCreateSymlink(destination, target) {
  return new Promise((resolve, reject) => {
    if (canCreateFileHere(destination)) {
      log(`can indeed create file here`);
      fs.symlink(target, destination, err => {
        if (err) {
          reject(err);
        } else {
          resolve(destination);
        }
      });
    } else {
      reject(`File ${chalk.blue(destination)} already exists.`);
    }
  });
  let createdSymlink = String(path.basename(destination));
  log(`Created symlink: ${createdSymlink}`);
  db.set("symlink.last.destination", createdSymlink).write();
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
function cFileSymlink(target, destination) {
  prCreateSymlink(target, destination)
    .then(dest => {
      log(`Created ${chalk.blue(dest)} symlink`);
      return dest;
    })
    .catch(err => {
      log(`cFileSymlink failed. ${chalk.red(err)}`);
    });
}

//Primary
function cFile(where, what, type) {
  //TODO: Add encoding option
  switch (type) {
    case "plain":
      /*
        @@where = file path + name;
        @@what = file content (UTF-8)
      */
      return cFilePlain(where, what);
    case "symlink":
      /*
        @@where = destination;
        @@what = target;

        Inverted because the "where" always represents path;
        what represents what's inside the where. Normally that's
        content. In this case, it's the value of the Symlink
      */
      return cFileSymlink(what, where);
    case "template":
      return cFileTemplate(where, what);
    case "config":
      return cFileConfig(where, what);
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
  createFile: cFile,
  utilBasename: basename
};
