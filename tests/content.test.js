/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-10T16:09:06-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-24T11:10:21-08:00
 */

const log = console.log;
const paths = require("../config/paths.js");
const path = require("path");
const sandbox = paths.T_SANDBOX;
const samplate = paths.T_TEMPLATES_SAMPLE;

const { samplateContent } = require(samplate);
const db = require(paths.DB_PATH)(paths.C_HISTORY);
test("Content interpolation works as expected", () => {
  /* Procedure:
    1. Copy content from original template file into buffer
    2. Mutate that content
    3. Return new content in new file
    Requirement
    */

  log(`DETAILED_CONTENT: ${paths.D_CONTENT}`);
  let { generateTemplateString } = require(paths.D_CONTENT);

  let templateMaker = generateTemplateString(samplateContent);
  templateMaker({ component: "FooBar" });
  log(`TemplateMaker: ${chalk.blue(templateMaker)}`);
});
