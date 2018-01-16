# API

I realize that I've been catering to a wide use case because I haven't took the time to understand the purpose of generator-generator. I marked it as the bedrock of file generation, but stopped there.... In order to get the API right here, must first evaluate the purpose of the API.

## Use case (broad spectrum)

* Generate new files from scratch
* Replicate file templates
* Duplicate file templates with variadic interpolationo

## How will it be extended (myopic)

* Generate libraries (library-generator) :: Webster
* Generate boilerplate (boilerplate-generator) :: Crichton
* Generate file structures (structure-generator) :: Webster
* Generate UI / style libraries (style-library-generator) :: Wilhelm
* Generate components (component-generator) :: Wilhelm

---

## First brainstorm attempt

![first brainstorm](./images/api_brainstorm_1.jpg)

The primary purpose of library generator will be to create file structures, replicate necessary dependencies like package.json and more.

What differentiates library from boilerplate? Library's purpose is to be included in another application (whether that's a CLI, web app, or other). Boilerplate on the other hand consumes generated library.

### Hierarchy

| Index | Name                  | Description                       |
| :---- | :-------------------- | :-------------------------------- |
| 0     | generator-generator   | generates raw files               |
| 1     | library-generator     | generates importable node modules |
| 2     | boilerplate-generator | generates                         |

## Second brainstorm

![second brainstorm](./images/api_brainstorm_2.jpg)

> Thinking more deeply about inheritance

The only generator I'm not sure about at this point is Crichton (ie. boilerplate-generator). I think it's the abstraction generator which wraps all other Wrigley design patterns and produces single boilerplates. But I'm not sure.

I think what makes sense is to focus exclusively on `generator-generator` and `library-generator` Bring those two to completion and then move onto the rest.

## Third brainstorm

> Considering the actual API for library-gen & generator-gen

![third brainstorm](./images/api_brainstorm_3.jpg)
