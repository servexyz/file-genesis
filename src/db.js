/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-08T14:34:34-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-10T13:59:41-08:00
 */

// NOTE: This is not a generator. Helper file which can be used for history / logging purposes
const historyDefault = `
  {
    "file": {
      "last": "empty"
    },
    "symlink": {
      "last": {
        "destination": "empty",
        "target": "empty"
      }
    }
  }
`;
// add defaults
module.exports = function(databaseFile) {
  //Database dependency
  const low = require("lowdb");

  //Database configuration
  const FileSync = require("lowdb/adapters/FileSync");
  const adapter = new FileSync(databaseFile);

  //Database instantiation
  const db = low(adapter);
  db.defaults(JSON.parse(historyDefault));
  return db;
};
