/*
Modules in JavaScript are a way to organize code into self-contained, reusable units. Modularization allows developers to break up large, complex applications into smaller, more manageable pieces, making it easier to maintain and test the code.
*/
//example of using the ES6 module format to export and import code:
// myModule.js
export const myVariable = "Hello, world!";
export function myFunction() {
  console.log("This is myFunction.");
}

// main.js
import { myVariable, myFunction } from "./myModule.js";
console.log(myVariable); // Output: "Hello, world!"
myFunction(); // Output: "This is myFunction."
