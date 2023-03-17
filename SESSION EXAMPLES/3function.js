// Function declaration
function add(a, b) {
    return a + b;
  }
  
  // Function expression
  const multiply = function(a, b) {
    return a * b;
  }
  
  // Arrow function expression
  const subtract = (a, b) => {
    return a - b;
  }
  
  // Method definition
  const person = {
    name: 'John',
    age: 30,
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  // Immediately Invoked Function Expression (IIFE)
  (function() {
    console.log('This function is immediately invoked.');
  })();
  
  // Higher-order function
  function applyOperation(a, b, operation) {
    return operation(a, b);
  }
  
  // Logging the results of the functions to the console
  console.log(add(2, 3)); // Output: 5
  console.log(multiply(4, 5)); // Output: 20
  console.log(subtract(10, 7)); // Output: 3
  person.greet(); // Output: "Hello, my name is John and I am 30 years old."
  console.log(applyOperation(6, 3, add)); // Output: 9
  console.log(applyOperation(6, 3, subtract)); // Output: 3
  