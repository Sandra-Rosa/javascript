/*
Events in JavaScript are actions or occurrences that happen in the browser, such as a user clicking a button, a page finishing loading, or an input field being updated. JavaScript provides a way to capture and respond to these events using event listeners.
*/
//1.Handling button clicks:
let myButton = document.getElementById('my-button');
myButton.addEventListener('click', function(event) {
  // Handle the click event
});
//2.Responding to keyboard input:
let myInput = document.getElementById('my-input');
myInput.addEventListener('keydown', function(event) {
  // Handle the keydown event
});
//3.Handling form submissions:
let myForm = document.getElementById('my-form');
myForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting
  // Handle the form submission
});
//4.Responding to page load events:
window.addEventListener('load', function(event) {
    // Handle the page load event
  });
//5.Handling mouse events:
let myElement = document.getElementById('my-element');
myElement.addEventListener('mousedown', function(event) {
  // Handle the mousedown event
});
