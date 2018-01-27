/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-04T12:43:32-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-26T16:20:19-08:00
 */

const log = console.log;
const path = require("path");
const chalk = require("chalk");
const paths = require(path.join(__dirname, "../config/paths.js"));
const fs = require("fs-extra");

// const db = require("../src/db.js")(paths.T_HISTORY);
const db = paths.DB_TEST;

const { createFile } = require(paths.API);

//<plain> file variables
const fName = `foo.bar`;
const fPath = `${paths.T_SANDBOX}/${fName}`;

test("File<plain> created", () => {
  createFile(fPath, "empty file", "plain");
  db.set("tests.lastPlainFileCreated", fPath).write();
  let lastPlainFileCreated = String(db.get("tests.lastPlainFileCreated"));
  expect(lastPlainFileCreated).toBe(fPath);
});

//<symlink> file variables
const sName = `.gitignore`;
const sOrigin = path.join(__dirname, `../${sName}`);
const sDestination = `${paths.T_SANDBOX}/${sName}`;

test("File<symlink> created", () => {
  createFile(sOrigin, sDestination, "symlink");
  db.set("tests.lastSymlinkFileCreated", sDestination).write();
  let lastSymlinkFileCreated = String(db.get("tests.lastSymlinkFileCreated"));
  expect(lastSymlinkFileCreated).toBe(sDestination);
});

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
test("File<template> created", () => {
  let content = {
    template: require(paths.T_TEMPLATES_SAMPLE),
    variables: { component: "Foo" }
  };
  createFile(filename, content);
});

beforeAll(() => {
  let directories = [fPath, sDestination];
  for (let d of directories) {
    log(`Removing: ${chalk.yellow(d)}`);
    fs.removeSync(d);
  }
});
