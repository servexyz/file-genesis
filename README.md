# file-genesis

[![Build Status](https://travis-ci.org/servexyz/file-genesis.svg?branch=master)](https://travis-ci.org/servexyz/file-genesis)

## Install

---

```js
yarn add file-genesis
const { file } = require('file-genesis');
```

---

## Use

---

```js
```

---

## API

---

#### `create()`

> This is the root invocation

```js
file.create(/path/and/file/name.ext)
```

#### `.plain()`, `.symlink()`, `.template()`

> This is used to specify the type and pass content

```js
```

#### `.content()`

> This is appended to the

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
