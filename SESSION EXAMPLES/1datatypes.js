//Primitive data types
const number = 42;
const string = 'Hello World';
const boolean = true;
const undefinedValue = undefined;
const nullValue = null;

//Complex data types
const object = {name: 'John', age: 30};
const array = [1, 2, 3];
const date = new Date();

//Symbol data type (added in ES6)
const symbol = Symbol('foo');

//Logging all data types to console
console.log(typeof number); // output: number
console.log(typeof string); // output: string
console.log(typeof boolean); // output: boolean
console.log(typeof undefinedValue); // output: undefined
console.log(typeof nullValue); // output: object (this is a known issue in JavaScript)
console.log(typeof object); // output: object
console.log(typeof array); // output: object
console.log(typeof date); // output: object
console.log(typeof symbol); // output: symbol
