/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-10T16:09:06-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-11T10:11:32-08:00
 */

const log = console.log;
const paths = require("../config/paths.js");
const path = require("path");
const db = require("../src/db.js");
const sandbox = paths.T_SANDBOX;
const samplate = paths.T_TEMPLATES_SAMPLE;

const { D_HISTORY } = require("../config/paths.js");
const db = require(path.join(__dirname, "./db.js"))(D_HISTORY);
test("Content interpolation works as expected", () => {
  /* Procedure:
    1. Copy content from original template file into buffer
    2. Mutate that content
    3. Return new content in new file
    Requirement
    */
});
