/*
In JavaScript, an object is a collection of properties, each of which has a name and a value. 

syntax
let myObject = {
  property1: value1,
  property2: value2,
  property3: value3,
  ...
};

*/

let myObject = {
    name: 'John',
    age: 30,
    address: {
      street: '123 Main St',
      city: 'Anytown',
      state: 'CA'
    }
  };
  
  console.log(myObject.name); // 'John'
  console.log(myObject.age); // 30
  console.log(myObject.address.city); // 'Anytown'
  