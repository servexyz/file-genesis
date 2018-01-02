# generator-generator-lib

<!-- TOC START min:1 max:4 link:true update:true -->

* [generator-generator-lib](#generator-generator-lib)
  * [FAQ](#faq)
  * [API](#api)
    * [File Types](#file-types)
    * [Simple](#simple)
      * [write(fName, fContent, fType)](#writefname-fcontent-ftype)
      * [read(fPath)](#readfpath)
      * [update(fPath, fContent)](#updatefpath-fcontent)
      * [delete(fPath)](#deletefpath)
    * [Detailed Examples](#detailed-examples)
      * [File](#file)
      * [Directory](#directory)
      * [Content](#content)
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
| Empty    | Some men just want to watch the world burn        |
| Template | Easily replace variables within given text        |
| Config   | Manage configs to track files created and deleted |
| Symlink  | Connect things with other things                  |

### Simple

> The functions below are an amalgam of file, directory and content manipulation. They work with respective [file types](#file-types).

#### write(fName, fContent, fType)

| Parameter  | Type         | Example                                            |
| :--------- | :----------- | :------------------------------------------------- |
| `fPath`    | string       | `foo/bar/file.ext`                                 |
| `fContent` | string       |                                                    |
| `fType`    | enum::string | `empty`, `template`, `config`, or `file` (default) |

#### read(fPath)

| Parameter | Type   | Example            |
| :-------- | :----- | :----------------- |
| `fPath`   | string | `foo/bar/file.ext` |

#### update(fPath, fContent)

| Parameter  | Type   | Example            |
| :--------- | :----- | :----------------- |
| `fPath`    | string | `foo/bar/file.ext` |
| `fContent` | mixed  |                    |

##### Examples

| Call                                      | Result                            |
| :---------------------------------------- | :-------------------------------- |
| `update('/foo/bar/file.ext', newContent)` | => `/foo/bar/file.ext` is updated |

#### delete(fPath)

| Parameter | Type   | Example            |
| :-------- | :----- | :----------------- |
| `fPath`   | string | `foo/bar/file.ext` |

> The type (`directory`, `file`) is intuited based on whether or not it has an extension. In the case of files, be sure to include extensions. In the case of directories, all files within will be deleted as well.
> Initially I thought of adding an `fType` parameter here, but I don't see any reason why you would ever want to try to delete a directory without deleting all the content therein. Perhaps in the future there could be a use case for moving the files to a parent directory instead of automatically deleting them?

##### Examples

| Call                         | Result                                   |
| :--------------------------- | :--------------------------------------- |
| `delete('foo/bar/file.ext')` | => `foo/bar/file.ext` is deleted         |
| `delete('foo/bar/')`         | => `foo/bar/` dir is recursively deleted |

### Detailed Examples

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
