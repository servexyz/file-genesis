/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-04T12:43:32-08:00
 * @Email:  me@alechp.com
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-29T16:29:36-08:00
 */

import test from "ava";
const log = console.log;
const path = require("path");
const chalk = require("chalk");
const paths = require(path.join(__dirname, "../config/paths.js"));
const fs = require("fs-extra");

const fName = `foo.bar`;
const fPath = `${paths.T_SANDBOX}/${fName}`;
//
const tName = `sample.template.js`;
const tPath = `${paths.T_SANDBOX}/${tName}`;

//test mostly copied from content-genesis
let expectedFooUgly = `
 import React from \"react\";
 import PropTypes from "prop-types";
 export default class Foo extends React.Component {
   static defaultProps = {
     place: "holder"
   };
   static propTypes = {
     place: React.PropTypes.string.isRequired
   };
   state = {
     foo: "bar"
   };
   constructor(props) {
     super(props);
   }
   render() {
     return <div>{this.state.foo}</div>;
   }
 }
`;

let filepathPlain = `${paths.T_SANDBOX}/plain.js`;
let filepathSymlink = `${paths.T_SANDBOX}/symlink.js`;
let filepathTemplate = `${paths.T_SANDBOX}/template.js`;

test.before(t => {
  fs.removeSync(paths.T_SANDBOX);
});

test("files<[plain, symlink, template]> created", t => {
  const { File } = require(paths.API);
  File(filepathPlain).plain("foobar");
  File(filepathSymlink).symlink(paths.API);
  let variables = { component: "FooBar" };
  File(filepathTemplate).template(paths.T_TEMPLATES_SAMPLE, variables);
  t.pass();
});
