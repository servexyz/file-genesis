/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:20-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-26T15:23:45-08:00
 */

const file = require("file");

//TODO: Change API from switch. Needlessly dirty API.

function cFile(where, what, type) {
  switch (type) {
    case "plain":
      /*
        @@where = file path + name;
        @@what = file content (UTF-8)
      */
      return cFilePlain(where, what);
    case "symlink":
      /*
        @@what = source path;
        @@where = destination path;

      */
      return cFileSymlink(where, what);
    case "template":
      return cFileTemplate(where, what);
    default:
      log("Please specify file type.");
      break;
  }
}

module.exports = {
  createFile: cFile
};
