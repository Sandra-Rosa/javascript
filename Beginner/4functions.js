/*
functions are blocks of code that can be called and executed multiple times.
 Functions are a fundamental building block of JavaScript programming, and they allow you to write reusable code that can be used in many different parts of your program.

 syntax
 function functionName(parameters) {
  // code to be executed
  return value;
}

*/
//function to add two numbers
function addNumbers(num1, num2) {
    let sum = num1 + num2;
    return sum;
  }
  
  let result1 = addNumbers(5, 10);
  console.log(result1);
//Functions can also be defined using function expressions:
let addNumbers = function(num1, num2) {
    let sum = num1 + num2;
    return sum;
  };
  
  let result2 = addNumbers(5, 10);
  console.log(result2);
  
//Functions can also be defined using arrow functions, 
let addNumbers = (num1, num2) => {
    let sum = num1 + num2;
    return sum;
  };
  
  let result3 = addNumbers(5, 10);
  console.log(result3);
  