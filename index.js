// GLAB 318.1.1: NodeJS Installation and Basics

// Part 1: Node Installation

// Part 2: Node Command Line Interface

// Part 3: Node Package Manager
console.log("Hello World")

// Part 4: Creating a Server
// const http = require('http');
import http from 'http';

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// Part 5: Open Exploration
// Using what you have learned about HTTP request routing, create at least two different routes for your application. Have the “default” route continue to render the content above.
// Within those custom routes, explore your options! Be creative, and see what you can build by writing HTML to the response, reading and parsing different portions of the request, and implementing specific logic to create a unique experience.
// This lab is not graded, so do not worry if your routes end up being silly, impractical, inefficient, or ineffective. This time is for you to explore the new possibilities of using JavaScript outside of the context of a web browser.
// Use whatever time is available to continue your exploration. Brainstorm with your peers, reference documentation, and research the possibilities available to you.
// When you begin running out of time, make sure that you comment out any code that prevents the program from running.
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/about") {
    res.end("This is my About page.");
  } else if (req.url === "/contact") {
    res.end("This is my Contact page.");
  } else {
    res.end("Hello World!");
  }
});
server.listen(3000, () => {
  console.log("Server running");
});

// Part 6: Completion