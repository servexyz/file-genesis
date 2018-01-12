/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-04T12:43:32-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-11T16:59:07-08:00
 */

const log = console.log;
const path = require("path");
const chalk = require("chalk");
const paths = require(path.join(__dirname, "../config/paths.js"));
const fs = require("fs-extra");

const db = require("../src/db.js")(paths.T_HISTORY);

const { createFile, deleteFiles } = require(paths.D_FILE);

//<plain> file variables
const fName = `foo.bar`;
const fPath = `${paths.T_SANDBOX}/${fName}`;

test("File<plain> created", () => {
  createFile(fPath, "empty file", "plain");
  db.set("tests.lastPlainFileCreated", fPath).write();
  let lastPlainFileCreated = String(db.get("tests.lastPlainFileCreated"));
  expect(lastPlainFileCreated).toBe(fPath);
});

test("File<plain> deleted", () => {
  //TODO: Create utility which checks existence of file
  fs.pathExists(fPath, (err, exists) => {
    if (exists) {
      deleteFiles(fPath);
    }
  });
});

//<symlink> file variables
const sOrigin = `../.gitignore`;
const sDestination = `${paths.T_SANDBOX}/${sOrigin}`;

test("File<symlink> created", () => {
  createFile(sDestination, sOrigin, "symlink");
  db.set("tests.lastSymlinkFileCreated", sDestination).write();
  let lastSymlinkFileCreated = String(db.get("tests.lastSymlinkFileCreated"));
  expect(lastSymlinkFileCreated).toBe(sDestination);
});

test("File<symlink> deleted", () => {
  fs.access(fPath, err => {
    if (err) {
      log(`Cannot delete. File doesn't exist. ${chalk.red(err)}`);
    } else {
      deleteFiles(sDestination);
    }
  });
});
