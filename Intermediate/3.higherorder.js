/*
Higher order functions are functions that either take one or more functions as arguments, or they return a function as their result.
*/
//1.map() method
const numbers = [1, 2, 3, 4];
const squareNumbers = numbers.map((num) => num * num);
console.log(squareNumbers); // Output: [1, 4, 9, 16]
//2.filter() method
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]
//3.reduce() method
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 10
//.setTimeout
function sayHello() {
    console.log("Hello!");
  }
  
  setTimeout(sayHello, 2000); // Output: "Hello!" after 2 seconds
  