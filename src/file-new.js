/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-27T12:24:30-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-27T12:50:34-08:00
 */
const fs = require("fs-extra");
const { fluent } = require("./helpers.js");
function File(path) {
  this.path = path;
}

File.prototype.plain = fluent(content => {
  fs.outputFile(this.path, content, err);
});

File.prototype.symlink = fluent(origin => {
  fs.ensureSymlink(origin, this.path);
});

module.exports = {
  File
};
