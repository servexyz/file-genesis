/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:06-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-08T10:16:59-08:00
 */

const mkdirp = require("make-dir");
const chalk = require("chalk");

export default function createDirectory(name) {
  makeDir(name).then(path => {
    log(`Directory created. ${chalk.green(path)}`);
  });
}

/*
  ----------------------------------
  Existence questions...
  ----------------------------------
  * Does root directory exist ?
  * Does parent directory exist?
  * Does child directory exist ?

  ----------------------------------
  Existence answers...
  ----------------------------------
  * Create parent directory
  * Create child(ren) directories

*/
