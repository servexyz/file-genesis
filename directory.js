/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:06-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-02T10:45:49-08:00
 */

const mkdirp = require("make-dir");
const chalk = require("chalk");

export default function createDirectory(name) {
  makeDir(name).then(path => {
    log(`Directory created. ${chalk.green(path)}`);
  });
}
