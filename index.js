/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:33:20-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-29T14:13:01-08:00
 */

const log = console.log;
const { cFilePlain, cFileSymlink, cFileTemplate } = require("./src/file.js");

const { File } = require("./src/file-new.js");

module.exports = { File };

// function cFile(where, what, type) {
//   switch (type) {
//     case "plain":
//       /*
//         @@where = file path + name;
//         @@what = file content (UTF-8)
//       */
//       return cFilePlain(where, what);
//     case "symlink":
//       /*
//         @@what = source path;
//         @@where = destination path;
//
//       */
//       return cFileSymlink(where, what);
//     case "template":
//       return cFileTemplate(where, what);
//     default:
//       log("Please specify file type.");
//       break;
//   }
// }
//
// module.exports = {
//   createFile: cFile
// };
