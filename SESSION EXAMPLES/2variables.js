// Declaring variables using var
var a = 10;
var b = "hello";
var c = true;

// Declaring variables using let
let x = 20;
let y = "world";
let z = false;

// Declaring variables using const
const PI = 3.14;
const person = {name: "John", age: 30};

// Logging variables to console
console.log(a); // output: 10
console.log(b); // output: "hello"
console.log(c); // output: true
console.log(x); // output: 20
console.log(y); // output: "world"
console.log(z); // output: false
console.log(PI); // output: 3.14
console.log(person); // output: {name: "John", age: 30}

// Changing variable values
a = 20;
b = "hi";
c = false;
x = 30;
y = "there";
z = true;
// PI = 3.14159; // This will give an error because PI is a constant
person.age = 31; // This is allowed because we can modify object properties even if it's a const

// Logging variables to console after changes
console.log(a); // output: 20
console.log(b); // output: "hi"
console.log(c); // output: false
console.log(x); // output: 30
console.log(y); // output: "there"
console.log(z); // output: true
console.log(PI); // output: 3.14
console.log(person); // output: {name: "John", age: 31}
