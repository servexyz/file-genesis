/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-12T11:43:54-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-12T12:08:29-08:00
 */
////////////////////////////////////////////////////
// Utilities
////////////////////////////////////////////////////

const path = require("path");
const log = console.log;
const chalk = require("chalk");

function basename(filepath) {
  return String(path.basename(filepath));
}

//TODO: Create  function which updates permissions and/or ownership
function updateDatabase(filepath, dbkey) {
  let lastUpdate = String(path.basename(filepath));
  try {
    db.set(dbkey, lastUpdate).write();
    return lastUpdate;
  } catch (err) {
    log(`Failed to update LowDB. ${chalk.red(err)}`);
    return false;
  }
}

//TODO: Create tests (in. helpers.test.js)
module.exports = {
  basename,
  updateDatabase
};
