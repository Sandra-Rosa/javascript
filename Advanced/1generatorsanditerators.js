/*
In JavaScript, generators and iterators are used for controlling the flow of data.
Iterators are objects that implement the Iterator protocol, which allows them to produce a sequence of values.
Generators are functions that can be paused and resumed.
*/
//iterators
const arr = [1, 2, 3];
for (const value of arr) {
  console.log(value);
}
//generators
function* numberGenerator() {
    let i = 0;
    while (true) {
      yield i;
      i++;
    }
  }
  
  const iterator = numberGenerator();
  console.log(iterator.next().value); // 0
  console.log(iterator.next().value); // 1
  console.log(iterator.next().value); // 2
  // ...
  