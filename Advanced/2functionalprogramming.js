/*
Functional programming is a programming paradigm that emphasizes the use of functions to solve problems.
*/

// Immutability: In functional programming, data is immutable, meaning that it cannot be modified once it is created. In JavaScript, you can use techniques like Object.freeze() or libraries like Immutable.js to achieve immutability.

// Pure functions: A pure function is a function that always returns the same output for the same input and has no side effects. This makes them easy to reason about and test. Pure functions do not modify their arguments or any global state.

// Higher-order functions: Higher-order functions are functions that take other functions as arguments or return functions as their output. They allow for more expressive and reusable code.

// Recursion: Recursion is a technique in which a function calls itself to solve a problem. It can be used to solve many problems in a concise and elegant way.

//example of a pure, higher-order function that uses recursion:
function sum(n) {
    if (n === 0) {
      return 0;
    } else {
      return n + sum(n - 1);
    }
  }
  
  console.log(sum(5)); // 15
  