// If statement
const age = 18;
if (age >= 18) {
  console.log('You are eligible to vote.');
} else {
  console.log('You are not eligible to vote yet.');
}

// Switch statement
const dayOfWeek = 3;
switch (dayOfWeek) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  default:
    console.log('Weekend');
}

// While loop
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Do-while loop
let j = 1;
do {
  console.log(j);
  j++;
} while (j <= 5);

// For loop
for (let k = 1; k <= 5; k++) {
  console.log(k);
}

// For-in loop (used to iterate over the properties of an object)
const person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// For-of loop (used to iterate over the elements of an array)
const numbers = [1, 2, 3, 4, 5];
for (let number of numbers) {
  console.log(number);
}
