/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-02T09:34:17-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-11T11:38:42-08:00
 */

const fs = require("fs-extra");
const empty = require("is-empty");
const chalk = require("chalk");

function duplicate(source, destination) {
  //TODO: Create default destination... Add to paths.js
  fs
    .copy(source, destination)
    .then(() => {
      log(`Duplicate file created here: ${chalk.green(destination)}`);
      resolve(true);
    })
    .catch(err => {
      log(`Failed to duplicate file. ${chalk.red(err)}`);
      reject(false);
    });
}
function getTemplateName(value) {
  /*
    1. check first variable
    2. confirm that it contains template
    3. reject "false" or resolve "template variable name"
  */
  return new Promise((resolve, reject) => {
    if (value.includes("template.js")) {
      resolve(value);
    } else {
      reject(false);
    }
  });
}

function content(strings, ...values) {
  let content = "";
  // replicate file
  strings.forEach((str, i) => {
    if (i == 0) {
      getTemplateName(values[i])
        .then(template => {
          //if resolved, means template name was included duplicate
          duplicate(values[i]);
        })
        .catch(err => {
          log(
            `content tag failed. Did you remember to include template name as first variable in the template string? \n ${chalk.red(
              err
            )}`
          );
        });
    }
    let strWithNewlines = str.replace(/(\r|\n)/gm, "\n");
    content += strWithNewlines + (values[i] || "");
  });
  return content;
}
