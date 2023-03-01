/*
ES6 (ECMAScript 2015) introduced several new features and improvements to JavaScript syntax, including let/const, arrow functions, and template literals.
*/
//let and const
let x = 10;
if (true) {
  let x = 20;
  console.log(x); // Output: 20
}
console.log(x); // Output: 10

const PI = 3.14;
PI = 3.14159; // Error: Assignment to constant variable.
//Arrow functions:
// Traditional function
function add(x, y) {
    return x + y;
  }
  
  // Arrow function
  const add = (x, y) => x + y;
  
  // With one parameter
  const square = x => x * x;
  
  // Without parameters
  const sayHello = () => console.log("Hello, world!");
//Template literals:
const name = "Alice";
const age = 30;
console.log(`My name is ${name} and I am ${age} years old.`); // Output: "My name is Alice and I am 30 years old."
