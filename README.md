![logo](docs/images/logo/file-genesis@2x.png)

[![Build Status](https://travis-ci.org/servexyz/file-genesis.svg?branch=master)](https://travis-ci.org/servexyz/file-genesis)

## Install

---

```js
yarn add file-genesis
```

---

## Use

---

```js
const path = require("path");
const { File } = require("file-genesis");
const gitignore = `
  .DS_Store
  node_modules
`;

let filepathPlain = path.join(__dirname, ".gitignore");
File(filepathPlain).plain(gitignore);
```

> Note: Prettier is used for formatting during creation

---

## API

---

### `.plain()`, `.symlink()`, `.template()`

> This is used to specify the type and pass content

**plain**

```js
File("/path/to/file.ext").plain("content");
```

**symlink**

```js
File("/path/to/file.ext").symlink("/path/to/src", "/path/to/dest");
```

**template**

```js
let variables = { replaceMe: "withThisValue" };
File("/path/to/file.ext").template("path/to/template.ext", variables);
```

---

## Docs

---

* [api-brainstorm](./docs/api-brainstorm.md)
  > Multiple brainstorming attempts & old README content
* [debug](./docs/debug.md)
  > Documented debugging
* [resources](./docs/resources.md)
  > 3rd party API's
* [todo](./docs/todo.md)
  > Features & bugs by version

---

## Goals

---

* consistent api for symlinks, plain UTF-8 files and templates
* interoperable with content-genesis

---

## Related

---

* `content-genesis` [@github](https://github.com/servexyz/content-genesis) | [@npm](https://www.npmjs.com/package/content-genesis)
* `library-genesis` [@github](https://github.com/servexyz/library-genesis) | [@npm](https://www.npmjs.com/package/library-genesis)
