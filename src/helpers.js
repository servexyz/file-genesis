/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-12T11:43:54-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-12T12:27:04-08:00
 */
////////////////////////////////////////////////////
// Utilities
////////////////////////////////////////////////////

const path = require("path");
const log = console.log;
const chalk = require("chalk");
const paths = require("../config/paths.js");
//TODO: Create function which updates permissions and/or ownership

function basename(filepath) {
  return String(path.basename(filepath));
}

function updateDatabase(db, filepath, dbkey) {
  // whichDatabase == "config" || "test"
  let lastUpdate = String(path.basename(filepath));
  try {
    db.set(dbkey, lastUpdate).write();
    return lastUpdate;
  } catch (err) {
    log(`Failed to update LowDB. ${chalk.red(err)}`);
    return false;
  }
}

module.exports = {
  basename,
  updateDatabase
};
