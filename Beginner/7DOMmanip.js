/*
The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the web page so that programs can change the document structure, style, and content.

*/

//example of DO manipulation
//1.Accessing elements by ID, class, or tag name:
let myElement = document.getElementById('my-id');
let myElements = document.getElementsByClassName('my-class');
let myElements2 = document.getElementsByTagName('div');
//2.Creating new elements:
let newElement = document.createElement('div');
//3.Adding, removing, and modifying elements:
let myElement2 = document.getElementById('my-id');
myElement.innerHTML = 'New content';
myElement.style.backgroundColor = 'red';
myElement.appendChild(newElement);
myElement.removeChild(childElement);
//4.Handling events:
let myButton = document.getElementById('my-button');
myButton.addEventListener('click', function(event) {
  // Handle the click event
});
//5.Manipulating CSS styles:
let myElement = document.getElementById('my-id');
myElement.style.color = 'blue';
myElement.classList.add('my-class');
myElement.classList.remove('my-class');
