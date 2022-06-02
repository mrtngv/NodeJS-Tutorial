## Working with Modules

*Here we are going to see how to expose some functionalities, classes or variables and capsulate them in one file, so they can be reused in other files. They are called modules.*

1. Create new file called tutorial.js
2. define functions, classes and variables
3. export them with `module.exports`:
                                         module.exports = {a: a, b: b}`.
    => the same can be with this syntax: module.exports.a = a;
                                         module.exports.b = b;
4. In app.js import the module with `const tutorial = require('./tutorial');`
    and use the functionalities under the tutorial.

