/*
In JavaScript, prototypal inheritance is a mechanism that allows objects to inherit properties and methods from other objects, known as prototypes.
*/
//Object literals:
const myObject = {
    prop1: "Hello",
    prop2: "World",
    method: function() {
      console.log(this.prop1 + " " + this.prop2);
    }
  };
  
  myObject.method(); // Output: "Hello World"
//Constructor functions:
function MyClass(prop1, prop2) {
    this.prop1 = prop1;
    this.prop2 = prop2;
  }
  
  MyClass.prototype.method = function() {
    console.log(this.prop1 + " " + this.prop2);
  };
  
  const myObject1 = new MyClass("Hello", "World");
  myObject1.method(); // Output: "Hello World"
//