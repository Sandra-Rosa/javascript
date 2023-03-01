/*
Strings are a sequence of characters in JavaScript. You can manipulate strings using various methods provided by the language.
*/
//1.Concatenating strings:
let string1 = 'Hello';
let string2 = 'World';
let result = string1 + ' ' + string2; // Result is 'Hello World'
//2.Finding the length of a string:
let myString = 'Hello';
let length = myString.length; // Length is 5
//3.Extracting substrings:
let myString2 = 'Hello World';
let substring1 = myString2.substring(0, 5); // Substring is 'Hello'
let substring2 = myString2.substring(6); // Substring is 'World'
//4.Changing case:
let myString3 = 'Hello';
let upperCase = myString3.toUpperCase(); // Upper case is 'HELLO'
let lowerCase = myString3.toLowerCase(); // Lower case is 'hello'
//5.Searching for text:
let myString4 = 'Hello World';
let position = myString4.indexOf('World'); // Position is 6
let found = myString4.includes('World'); // Found is true
