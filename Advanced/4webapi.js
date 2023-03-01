// Web APIs are interfaces that allow web applications to interact with the browser and the underlying operating system. 
// Canvas API: The Canvas API allows web developers to create and manipulate graphics and animations using JavaScript
//Canvas API to draw a simple rectangle:
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 50, 50);
//Web Audio API: The Web Audio API allows web developers to create and manipulate audio in real-time using JavaScript.
//how to use the Web Audio API to create a simple oscillator:
const audioContext = new AudioContext();
const oscillator = audioContext.createOscillator();
oscillator.connect(audioContext.destination);
oscillator.start();
// Web Sockets API: The Web Sockets API allows web developers to create real-time, bi-directional communication between a web client and a server using a single TCP connection.
//Web Sockets API to create a simple chat application:
const socket = new WebSocket("wss://example.com/chat");

socket.addEventListener("open", event => {
  console.log("Connected to server");
  socket.send("Hello server!");
});

socket.addEventListener("message", event => {
  console.log("Received message: ", event.data);
});

socket.addEventListener("close", event => {
  console.log("Disconnected from server");
});
