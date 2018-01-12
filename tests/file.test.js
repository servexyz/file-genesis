/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-04T12:43:32-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-11T16:11:29-08:00
 */

const log = console.log;
const path = require("path");
const chalk = require("chalk");
const paths = require(path.join(__dirname, "../config/paths.js"));
const fs = require("fs-extra");

const db = require("../src/db.js")(paths.C_HISTORY);

const { createFile, deleteFiles } = require(paths.D_FILE);
//Used for file created and file deleted tests
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
  fs.access(fPath, err => {
    if (err) {
      log(`Cannot delete. File doesn't exist. ${chalk.red(err)}`);
    } else {
      deleteFiles(fPath);
    }
  });
});

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
// test("Symlink created", () => {
//   const { createFile, utilBasename } = require("../src/file.js");
//   //create symlink, write history
//   let target = `${paths.C_TEMPLATES}/sample.template.js`;
//   let destination = `${paths.T_SANDBOX}/samplate.js`;
//   let sym = createFile(target, destination, "symlink");
//   //read history
//   let history = require(paths.D_HISTORY);
//   let lastDestination = history.symlink.last.destination;
//   // let lastTarget = history.symlink.last.target;
//   // expect(target).toBe( lastTarget);
//   expect(utilBasename(destination)).toBe(lastDestination);
// });
