/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-08T14:34:34-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-08T14:35:51-08:00
 */

//Database dependency
const low = require("lowdb");

//Database configuration
const FileSync = require("lowdb/adapters/FileSync");
const { D_HISTORY } = require("../config/paths.js");
const adapter = new FileSync(D_HISTORY);

//Database instantiation
const db = low(adapter);

module.exports = db;
