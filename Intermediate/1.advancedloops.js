/*
JavaScript provides three powerful array methods called forEach(), map(), and reduce() that make it easy to perform complex operations on arrays.

*/
//1.forEach()
const array = [1, 2, 3, 4];

array.forEach(element => console.log(element));
// Output: 1, 2, 3, 4

//2.map()

const sum = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);
// Output: 10
//3.reduce()

const sum2 = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum2);
// Output: 10