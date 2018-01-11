/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-08T14:16:52-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-11T14:40:19-08:00
 */
const moment = require("moment");
const { T_HISTORY } = require("../config/paths.js");
const db = require("../src/db.js")(T_HISTORY);
const chalk = require("chalk");

test("db writes/reads properly", () => {
  db.defaults({ tests: {} }).write();
  let currentTime = moment().format("MMM, Do, YYYY, h:mm:ssSS");
  db.set("tests.lastAdded", currentTime).write();

  //db.get returns object if not typecasted as string
  let recent = String(db.get("tests.lastAdded"));
  expect(recent).toBe(currentTime);
});
