/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-08T14:13:42-08:00
 * @Email:  me@alechp.com
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-26T16:23:02-08:00
 */

const path = require("path");

const API = path.join(__dirname, "../index.js");
//DETAILED
const DETAILED_CONTENT = path.join(__dirname, "../src/content.js");
const DETAILED_DIRECTORY = path.join(__dirname, "../src/directory.js");
const DETAILED_FILE = path.join(__dirname, "../src/file.js");

//TEST
const TEST_HISTORY_DB = path.join(__dirname, "../tests/sandbox.history.json");
const TEST_SANDBOX = path.join(__dirname, "../tests/sandbox");
const TEST_TEMPLATES_SAMPLE = path.join(
  __dirname,
  "../templates/sample.template.js"
);

//CONFIG
const CONFIG_HISTORY_DB = path.join(__dirname, "./history.json");
const CONFIG_TEMPLATES = path.join(__dirname, "../templates");
const CONFIG_TEMPLATES_DUPLICATES = path.join(
  __dirname,
  "../templates/.duplicates"
);

//DB Instantiation
const DB_PATH = path.join(__dirname, "../src/db.js");
const DB_CONFIG = require(DB_PATH)(CONFIG_HISTORY_DB);
const DB_TEST = require(DB_PATH)(TEST_HISTORY_DB);

module.exports = {
  API: API,
  C_HISTORY: CONFIG_HISTORY_DB,
  C_TEMPLATES: CONFIG_TEMPLATES,
  C_T_DUPLICATES: CONFIG_TEMPLATES_DUPLICATES,
  D_CONTENT: DETAILED_CONTENT,
  D_DIRECTORY: DETAILED_DIRECTORY,
  D_FILE: DETAILED_FILE,
  T_SANDBOX: TEST_SANDBOX,
  T_HISTORY: TEST_HISTORY_DB,
  T_TEMPLATES_SAMPLE: TEST_TEMPLATES_SAMPLE,
  DB_PATH: DB_PATH,
  DB_CONFIG: DB_CONFIG,
  DB_TEST: DB_TEST
};
