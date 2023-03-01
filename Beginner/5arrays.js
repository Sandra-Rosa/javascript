/*
In JavaScript, an array is a collection of elements, each identified by an index or a key.

syntax
let myArray = [element1, element2, element3, ...];

it can be also created using array constructor
example
let myArray1 = new Array(element1, element2, element3, ...);
*/
let myArray = ['apple', 'banana', 'orange'];
console.log(myArray[1]);

myArray.push('grape'); // adds 'grape' to the end of the array
console.log(myArray); // ['apple', 'banana', 'orange', 'grape']

myArray.pop(); // removes the last element ('grape') from the array
console.log(myArray); // ['apple', 'banana', 'orange']

myArray.forEach(function(element) {
  console.log(element);
}); // logs each element of the array to the console

myArray.sort(); // sorts the elements of the array in alphabetical order
console.log(myArray); // ['apple', 'banana', 'orange']