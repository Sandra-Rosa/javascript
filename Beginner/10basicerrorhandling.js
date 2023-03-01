/*
Error handling is an essential part of programming, and JavaScript provides several ways to handle errors in your code. 
1.Try-Catch Block:
syntax:
try {
  // Code that may throw an error
} catch(error) {
  // Code to handle the error
}
2.Throw Statement:
syntax:
if (someCondition) {
  throw new Error('An error occurred');
}
3.Finally Block
try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
} finally {
  // Code to execute after try/catch block
}

*/
//throw block
function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    } else {
      return a / b;
    }
  }
  