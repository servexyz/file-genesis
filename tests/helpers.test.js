/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-12T11:47:28-08:00
 * @Email:  me@alechp.com
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-24T09:58:44-08:00
 */

import test from "ava";
const moment = require("moment");
const paths = require("../config/paths.js");

test("basename extracts filename from filepath", t => {
  const { basename } = require("../src/helpers.js");
  //Doesn't matter that this path is specific...
  //Just making sure that foo.bar is being extracted as expected
  let filepath =
    "/Users/alechp/Code/servexyz/generator-generator/lib/tests/sandbox/foo.bar";
  let extractedFilename = basename(filepath);
  t.is(extractedFilename, "foo.bar");
});

test("vanilla db.js writes/reads properly", t => {
  let db = paths.DB_TEST;
  db.defaults({ tests: {} }).write();
  let currentTime = moment().format("MMM, Do, YYYY, h:mm:ssSS");
  db.set("tests.lastTestRan", currentTime).write();
  let recent = String(db.get("tests.lastTestRan"));
  t.is(recent, currentTime);
});

// test("db.js wrapper, updateDatabase, writes/reads properly");
