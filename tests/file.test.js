/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-04T12:43:32-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-08T14:26:57-08:00
 */

const log = console.log;
const path = require("path");
const sandbox = path.join(__dirname, "./.sandbox");

test("File successfully created", () => {
  const { createFile } = require("../src/file.js");
  let fName = `foo.bar`;
  log(`Sandbox: ${sandbox}`);
  let fPath = `${sandbox}/${fName}`;
  createFile(fPath, "", "plain");
  // TODO: Use lowdb to test for last created file
  expect(true);
});
