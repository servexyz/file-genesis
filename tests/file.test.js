/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-04T12:43:32-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-12T09:00:51-08:00
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

//<symlink> file variables
const sName = `.gitignore`;
const sOrigin = path.join(__dirname, `../${sName}`);
const sDestination = `${paths.T_SANDBOX}/${sName}`;

test("File<symlink> created", () => {
  createFile(sDestination, sOrigin, "symlink");
  db.set("tests.lastSymlinkFileCreated", sDestination).write();
  let lastSymlinkFileCreated = String(db.get("tests.lastSymlinkFileCreated"));
  expect(lastSymlinkFileCreated).toBe(sDestination);
});

afterAll(() => {
  fs
    .remove(fPath)
    .remove(sDestination)
    .catch(err => {
      log(`${chalk.yellow("file.test.js")} failed cleanup. ${chalk.red(err)}`);
    });
});
