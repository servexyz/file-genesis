/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:13-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-02T11:08:50-08:00
 */

const createFile = require("create-file");

/* @bool */
export default function file(name, content) {
  createFile(name, content, err => {
    if (err) {
      log(
        `${chalk.red("Failed to writeFile")} \n File: ${chalk.blue(
          name
        )} \n Error: ${chalk.red(err)}`
      );
      return false;
    } else {
      log(`${chalk.green(name)} was created.`);
      return true;
    }
  });
}
