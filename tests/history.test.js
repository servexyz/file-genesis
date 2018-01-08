/**
 * @Author: Alec Hale-Pletka <alechp>
 * @Date:   2018-01-08T14:16:52-08:00
 * @Email:  alec@bubblegum.academy
 * @Last modified by:   alechp
 * @Last modified time: 2018-01-08T15:11:35-08:00
 */
const { T_HISTORY } = require("../config/paths.js");
const db = require("../config/db.js")(T_HISTORY);

test("db write/reads properly", () => {
  // Set some defaults
  db.defaults({ posts: [], user: {} }).write();

  // Add a post
  db
    .get("posts")
    .push({ id: 1, title: "lowdb is awesome" })
    .write();

  // Set a user using Lodash shorthand syntax
  db.set("user.name", "typicode").write();

  expect(true);
});
