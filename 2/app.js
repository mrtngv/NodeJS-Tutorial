// import { sum, PI, SomeObject } from './tutorial';
// console.log(sum(1,3));
// console.log(PI);
// console.log(new SomeObject());

const tutorial = require('./tutorial');
console.log(tutorial);
console.log(tutorial.sum(1, 3));
console.log(tutorial.PI);
console.log(new tutorial.SomeObject());
