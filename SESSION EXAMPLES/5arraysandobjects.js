// Array of numbers
const numbers = [1, 2, 3, 4, 5];

// Array of strings
const fruits = ['apple', 'banana', 'orange'];

// Array of objects
const people = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 25 },
  { name: 'Bob', age: 40 }
];

// Accessing array elements
console.log(numbers[0]); // Output: 1
console.log(fruits[1]); // Output: 'banana'
console.log(people[2].name); // Output: 'Bob'

// Modifying array elements
numbers[0] = 10;
fruits[1] = 'mango';
people[2].age = 50;

// Adding and removing array elements
numbers.push(6);
fruits.pop();
people.shift();

// Object with properties
const person = {
  name: 'John',
  age: 30,
  occupation: 'Developer'
};

// Accessing object properties
console.log(person.name); // Output: 'John'
console.log(person['age']); // Output: 30

// Modifying object properties
person.age = 35;
person['occupation'] = 'Designer';

// Adding and removing object properties
person.country = 'USA';
delete person.occupation;

// Logging the arrays and objects to the console
console.log(numbers); // Output: [10, 2, 3, 4, 5, 6]
console.log(fruits); // Output: ['apple', 'mango']
console.log(people); // Output: [{ name: 'Jane', age: 25 }, { name: 'Bob', age: 50 }]
console.log(person); // Output: { name: 'John', age: 35, country: 'USA' }
