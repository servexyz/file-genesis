/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:13-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-08T15:39:58-08:00
 */

const fs = require("fs");
const chalk = require("chalk");
const path = require("path");
const log = console.log;

const { D_HISTORY } = require("../config/paths.js");
const db = require(path.join(__dirname, "../config/db.js"))(D_HISTORY);

/* @bool */

// Root file creator function
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

//Default file creator
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
function cFileTemplate(name, content) {}
function cFileConfig(name, content) {}
function cFile(name, content, type) {
  switch (type) {
    case "plain":
      return cFilePlain(name, content);
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

module.exports = {
  createFile: cFile
};
