/*
In JavaScript, scope refers to the visibility or accessibility of variables and functions in different parts of your code.
*/
//global
const globalVar = "I am global!";

function globalFunction() {
  console.log(globalVar); // Output: "I am global!"
}

globalFunction();
//local
function localFunction() {
    const localVar = "I am local!";
    console.log(localVar); // Output: "I am local!"
  }
  
  localFunction();
//closure
function outerFunction() {
    const outerVar = "I am outer!";
  
    function innerFunction() {
      console.log(outerVar); // Output: "I am outer!"
    }
  
    return innerFunction;
  }
  
  const innerFunc = outerFunction();
  innerFunc();
  