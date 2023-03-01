/*
Regular expressions, also known as regex, are patterns used to match character combinations in strings.
syntax:
const regex = /pattern/flags;
*/
//1.Matching a specific string:
const regex = /hello/;
const str = "Hello, world!";
console.log(regex.test(str)); // Output: false
//2.Matching a string with a regular expression pattern:
const regex2 = /lo+/;
const str2 = "Hello, world!";
console.log(regex2.test(str2)); // Output: true
//3.Using the replace() method to replace a string with a regular expression pattern:
const regex3 = /world/;
const str3 = "Hello, world!";
const newStr = str3.replace(regex3, "JavaScript");
console.log(newStr); // Output: "Hello, JavaScript!"
//4.Using the match() method to find all occurrences of a regular expression pattern:
const regex4 = /\d+/g;
const str4 = "There are 100 apples and 200 oranges.";
const matches = str4.match(regex4);
console.log(matches); // Output: ["100", "200"]
