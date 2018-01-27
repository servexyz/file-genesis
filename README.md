# file-genesis

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
const { file } = require("file-genesis");
const gitignore = `
  .DS_Store
  node_modules
`;

file.create(path.join(__dirname, ".gitignore")).plain(gitignore);
```

> Note: Prettier is used for formatting during creation

---

## API

---

#### `create()`

> This is the root invocation

```js
file.create("/path/and/file/name.ext");
```

#### `.plain()`, `.symlink()`, `.template()`

> This is used to specify the type and pass content

**plain**

```js
file.create("/path/to/file.ext").plain(<string>content)
```

**symlink**

```js
file.create("/path/to/file.ext").symlink("/path/to/src", "/path/to/dest");
```

**template**

```js
file.create("/path/to/file.ext").template("path/to/template.ext", "variables");
```

---

## Docs

---

* [api-brainstorm](./docs/api-brainstorm.md)
  > Multiple brainstorming attempts & old README content
* [debug](./docs/debug.md)
  > History of debugging
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

* [content-genesis](https://github.com/servexyz/content-genesis)
