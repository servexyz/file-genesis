/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-10T16:09:06-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-12T09:17:08-08:00
 */

const log = console.log;
const paths = require("../config/paths.js");
const path = require("path");
const db = require("../src/db.js");
const sandbox = paths.T_SANDBOX;
const samplate = paths.C_TEMPLATES_SAMPLE;

const db = require(path.join(__dirname, "./db.js"))(paths.C_HISTORY);
test("Content interpolation works as expected", () => {
  /* Procedure:
    1. Copy content from original template file into buffer
    2. Mutate that content
    3. Return new content in new file
    Requirement
    */
});
