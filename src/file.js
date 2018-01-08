/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:13-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-04T14:13:25-08:00
 */

const createFile = require("create-file");
const deleteFile = require("delete");
const chalk = require("chalk");
const log = console.log;

/* @bool */
function cFilePlain(name, content) {
  let bCreationFlag = null;
  createFile(name, content, err => {
    if (err) {
      log(
        `${chalk.red("Failed to writeFile")} \n File: ${chalk.blue(
          name
        )} \n Error: ${chalk.red(err)}`
      );
      return false;
    } else {
      log(`${chalk.green(name)} was created.`);
      return true;
    }
  });
  // return bCreationFlag;
}
function cFile(name, type, content) {
  switch (type) {
    case "plain":
      return cFilePlain(name, content);
      log("Plain file created");
      break;
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
  createFile: cFile,
  deleteFile: dFile
};
