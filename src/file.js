/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:13-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-08T12:00:36-08:00
 */

const fs = require("fs");
const chalk = require("chalk");
const log = console.log;

/* @bool */

// Root file creator function
function prCreateFile(name, content) {
  // Will create file in cwd unless path is specified in name
  return new Promise((resolve, reject) => {
    log(`Name inside promise: ${chalk.green(name)}`);
    fs.writeFile(name, content, "utf8", err => {
      if (err) {
        reject(err);
      } else {
        log(`Name inside fs: ${chalk.yellow(name)}`);
        resolve(name);
      }
    });
  });
}

//Default file creator
function cFilePlain(filename, content) {
  prCreateFile(filename, content)
    .then(name => {
      log(`Created ${chalk.blue(name)}`);
      return true;
    })
    .catch(err => {
      `cFilePlain failed. ${chalk.red(err)}`;
      return false;
    });

  log(`Finished cFilePlain`);
}
function cFileTemplate(name, content) {}
function cFileConfig(name, content) {}
function cFile(name, content, type) {
  switch (type) {
    case "plain":
      let flag = cFilePlain(name, content);
      return flag;
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
