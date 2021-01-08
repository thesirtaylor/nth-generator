<p align="center">
  <a href="" rel="noopener">
 <!-- <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a> -->
</p>

<h3 align="center">nth-generator</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/thesirtaylor/nth-generator.svg)](https://github.com/thesirtaylor/nth-generator/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/thesirtaylor/nth-generator.svg)](https://github.com/thesirtaylor/nth-generator/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>
 Eliminates the need to call .next() a couple of times on your generator function before yielding needed values

This is a package of helper functions that return the yield of the nth value or the yields of nth values of generator functions. They return these values immediately, instead of calling .next() severally before a particular yield value(s) can be returned.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

Just a properly set up JavaScript development environment, most preferably VSCode, for proper viewing of the JSDoc

```
none
```

### Installing
Very easy to use, just install 

```js
npm install nth-generator --save
```

## 🎈 Usage <a name="usage"></a>

Importing the package at the top of your file make the helper functions .nth() and .nths() available to your project
```js
var nthGenerator = require('nth-generator');
```
or ES6
```js
import {nthGenerator} from 'nth-generator'
```
call the helper functions on the generator function, not on references to the generator function
```js
function* genx() {
  yield {
    name: "paul",
    age: 25,
  };
  yield "Calculus";
  yield 23;
  yield ["age", 17, { day: "Monday" }];
  return 5;
}
```
```js
//to use .nths() we provide an array of the indices we need to return and the lenght of available generator yields as arguments, starts from index 1
genx().nths([1,2], 5);
```
```js
//to use .nth() we provide only an index of the yield we need to return, starts from index 1
genx().nth(4)
```
```js

[ { name: 'paul', age: 25 }, 'Calculus' ]
```
```js

["age", 17, { day: "Monday" }]
```
## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [@thesirtaylor](https://github.com/thesirtaylor) - Idea & Initial work

See also the list of [contributors](https://github.com/thesirtaylor/nth-generator/contributors) who participated in this project.

## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- You, the users and contributors

