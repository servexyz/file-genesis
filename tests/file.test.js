/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-04T12:43:32-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-10T13:51:28-08:00
 */

const log = console.log;
const path = require("path");
const chalk = require("chalk");
const paths = require(path.join(__dirname, "../config/paths.js"));

function createTestFile(fileName) {
  const { createFile } = require("../src/file.js");
  log(`Paths sand: ${paths.T_SANDBOX}`);
  let fPath = `${paths.T_SANDBOX}/${fileName}`;
  createFile(fPath, "empty file", "plain");
}
function getLastFileCreated() {
  let history = require(paths.D_HISTORY);
  let lastFileAddedToHistory = history.file.last;
  return lastFileAddedToHistory;
}

test("File created", () => {
  let fName = `foo.bar`;
  createTestFile(fName);
  let createdFile = getLastFileCreated();
  expect(createdFile).toBe(fName);
});

test("Symlink created", () => {
  const { createFile, utilBasename } = require("../src/file.js");
  //create symlink, write history
  let target = `${paths.T_TEMPLATES}/sample.template.js`;
  let destination = `${paths.T_SANDBOX}/samplate.js`;
  let sym = createFile(target, destination, "symlink");
  //read history
  let history = require(paths.D_HISTORY);
  let lastDestination = history.symlink.last.destination;
  // let lastTarget = history.symlink.last.target;
  // expect(target).toBe( lastTarget);
  expect(utilBasename(destination)).toBe(lastDestination);
});
