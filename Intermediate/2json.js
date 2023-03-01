/*
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.
*/
//1.JSON.parse()
//parse a JSON string and convert it into a JavaScript 
const jsonString = '{"name":"John", "age":30, "city":"New York"}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // Output: "John"
console.log(obj.age); // Output: 30
console.log(obj.city); // Output: "New York"
//2.JSON.stringify()
//convert a JavaScript object into a JSON string.
const obj2 = {name: "John", age: 30, city: "New York"};
const jsonString2 = JSON.stringify(obj2);
console.log(jsonString2); // Output: '{"name":"John","age":30,"city":"New York"}'

