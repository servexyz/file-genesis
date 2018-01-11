/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-04T12:43:32-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-11T15:03:19-08:00
 */

const log = console.log;
const path = require("path");
const chalk = require("chalk");
const paths = require(path.join(__dirname, "../config/paths.js"));

const { C_HISTORY } = require("../config/paths.js");
const db = require("../src/db.js")(C_HISTORY);

//TODO: Add smart toggle so that testing can be done in T_HISTORY and C_HISTORY...
// * Tests should CR TEST_HISTORY_DB
// * Production should CR CONFIG_HISTORY_DB
//TODO: Move sandbox.history.json to lib/tests so there's no confusion

test("File created", () => {
  const { createFile } = require("../src/file.js");
  let fName = `foo.bar`;
  let fPath = `${paths.T_SANDBOX}/${fName}`;
  createFile(fPath, "empty file", "plain");
  db.set("tests.lastFileCreated", fPath).write();
  let lastFileCreated = String(db.get("tests.lastFileCreated"));
  expect(lastFileCreated).toBe(fPath);
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
