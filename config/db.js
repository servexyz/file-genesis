/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-08T14:34:34-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-08T14:45:41-08:00
 */

module.exports = function(databaseFile) {
  //Database dependency
  const low = require("lowdb");

  //Database configuration
  const FileSync = require("lowdb/adapters/FileSync");
  const adapter = new FileSync(databaseFile);

  //Database instantiation
  const db = low(adapter);
  return db;
};
