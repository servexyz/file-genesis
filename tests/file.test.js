/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-04T12:43:32-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-04T14:11:28-08:00
 */

const { createFile, deleteFile } = require("../src/file.js");
const log = console.log;
const path = require("path");
const sandbox = path.join(__dirname, "./.sandbox");

test("File successfully created", () => {
  let fileName = `${sandbox}/foo.bar`;
  let createdFile = createFile(fileName, "plain", "");
  log(`createdFile: ${createdFile}`);
  expect(created.toBe(true));
});
