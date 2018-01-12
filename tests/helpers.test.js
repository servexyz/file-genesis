/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-12T11:47:28-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-12T11:55:35-08:00
 */

const moment = require("moment");
const paths = require("../config/paths.js");

test("basename extracts filename from filepath", () => {
  const basename = require("../src/helpers.js");
  let filepath =
    "/Users/alechp/Code/servexyz/generator-generator/lib/tests/.sandbox/foo.bar";
  let extractedFilename = basename(filepath);
  expect(extractedFilename).toBe("foo.bar");
});

test("vanilla db.js writes/reads properly", () => {
  let db = paths.DB_TEST;
  db.defaults({ tests: {} }).write();
  let currentTime = moment().format("MMM, Do, YYYY, h:mm:ssSS");
  db.set("tests.lastTestRan", currentTime).write();
  let recent = String(db.get("tests.lastTestRan"));
  expect(recent).toBe(currentTime);
});

// test("db.js wrapper, updateDatabase, writes/reads properly");
