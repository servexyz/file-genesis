# generator-generator-lib

<!-- TOC START min:1 max:4 link:true update:true -->

* [generator-generator-lib](#generator-generator-lib)
  * [FAQ](#faq)
  * [API](#api)
    * [File Types](#file-types)
    * [Abstraction](#abstraction)
      * [write](#write)
* [generator-generator-lib](#generator-generator-lib)

## FAQ

> Why make this?

1. Abstract away all of the usual file read/write nonsense that has been implemented a million times.
2. Prevent dependencies from being needlessly bloated
3. Prevent future decisions on which file CRUD libraries to use going forward

## API

* [File Types](#file-types) - All possible generated file types
* [Simple](#examples) - Abstracted, recommended API
* [Complex](#usage) - Core functionality whn extend yourself

---

### File Types

> Below are all of the possible file types

| What     | Why                                               |
| :------- | :------------------------------------------------ |
| Plain    | Accept standard string (or empty string)          |
| Template | Easily replace variables within given text        |
| Config   | Manage configs to track files created and deleted |
| Symlink  | Connect things with other things                  |

> Below is a flushed out list of file types and their values

```js
{
  "fType": {
    "file": "",
    "template": {
      "keys": variablesToReplace,
      "values": contentToReplaceVariablesWith,
      "track": false
    },
    "config": {
      "keys": variablesToReplace,
      "values": contentToReplaceVariablesWith
      "track": true
    },
    "symlink": {
      "src": "/path/to/original/file",
      "dest": "./created-symlink"
    }
  }
}
```

### Abstraction

> The functions below are an amalgam of file, directory and content manipulation. They work with respective [file types](#file-types).

* [write](#write)
* [read](#)

#### write

> write(fName, fContent, fType)

| Parameter  | Type         | Example                                            |
| :--------- | :----------- | :------------------------------------------------- |
| `fPath`    | string       | `foo/bar/file.ext`                                 |
| `fContent` | string       |                                                    |
| `fType`    | enum::string | `empty`, `template`, `config`, or `file` (default) |

##### Examples

| Call                                           | Result                        |
| :--------------------------------------------- | :---------------------------- |
| `write('foo/bar/file.ext', content, template)` | => `foo/bar/file.ext` created |

---

#### read

> read(fPath)

| Parameter | Type   | Example            |
| :-------- | :----- | :----------------- |
| `fPath`   | string | `foo/bar/file.ext` |

##### Examples

| Call               | Result |
| :----------------- | :----- |
| `foo/bar/file.ext` | ?      |

---

#### update

> update(fPath, fType, fContent)

```
Update is likely going to be the most difficult to implement given that it will need to take both concatenation and interpolation into account...
Going to save this for last. Not even totally sure it's necessary at this point TBH.
```

| Parameter  | Type         | Example                                   |
| :--------- | :----------- | :---------------------------------------- |
| `fPath`    | string       | `foo/bar/file.ext`                        |
| `fContent` | mixed        |                                           |
| `fType`    | enum::string | `template`, `config`, or `file` (default) |

##### Examples

| Call                                      | Result                            |
| :---------------------------------------- | :-------------------------------- |
| `update('/foo/bar/file.ext', newContent)` | => `/foo/bar/file.ext` is updated |

---

#### delete

> delete(fPath)

| Parameter | Type   | Example            |
| :-------- | :----- | :----------------- |
| `fPath`   | string | `foo/bar/file.ext` |

##### Examples

| Call                         | Result                                   |
| :--------------------------- | :--------------------------------------- |
| `delete('foo/bar/file.ext')` | => `foo/bar/file.ext` is deleted         |
| `delete('foo/bar/')`         | => `foo/bar/` dir is recursively deleted |

---

---

### Implementation Detail

> Below is sample output rendered independently by each file. This is what you can produce without using the abstracted API's.

#### File

> [File.js](./file.js)

| Result     | Type    |
| :--------- | :------ |
| `file.ext` | UTF-8   |
| `file`     | Symlink |

#### Directory

> [Directory.js](./directory.js)

| Result     | Type   | Description                        |
| :--------- | :----- | :--------------------------------- |
| `/Foo`     | Simple | Empty directory is created         |
| `/Foo/Bar` | Nested | Empty, nested directory is created |

#### Content

> [Content.js](./content.js)

| Result     | Type     | Description                                       |
| :--------- | :------- | :------------------------------------------------ |
| `file.ext` | Plain    | File is populated UTF-8 via initial write-file cb |
| `file.ext` | Config   | File creates parseable config with conf store     |
| `file.ext` | Template | File creates parseable config without conf store  |

---

```

```
