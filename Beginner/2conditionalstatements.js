/*
syntax of if-else loop
if (condition) {
  // code to be executed if condition is true
}

*/
let num = 5;

if (num > 0) {
  console.log("The number is positive.");
}
//another eg
num = -5;

if (num > 0) {
  console.log("The number is positive.");
} else {
  console.log("The number is not positive.");
}
//another eg

num = 0;

if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}
