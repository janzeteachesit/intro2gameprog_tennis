/*
Utilising CodePen JavaScript Console (//codepen.io/nullobject/pen/cngzI) 
made with love by @nullobject (http://joshbassett.info), 2014. 

Stuff from tutorial not needed in CodePen
<!DOCTYPE>, <html>, <head> <body> tags
window.onload = function script

grist for this pen:
https://gist.github.com/janzeteachesit/5218229496c09fd540ea2f9b5de1e5e2
*/

// console.log("Hello, World!");
// console.log("Here's another line of text going to the JavaScript console");
// console.log("Jimmy Joe Bob!"); example of commenting out.
// console.log("PROGRAMMING RULES OMB WHEEEEEEE!!1!!1!ONE");
/*Here's how a multi-line comment looks in JavaScript. Just like the HTML one it won't be used by the browser, but is still visible when someone does a View  Source.*/

/*
////; a signal that this needs to/will be changed later. 
*/
// variables to keep track of ball position //// 05
var ballX = 75, ballY = 75; //// 05
var ballSpeedX = 2; //// 06

// save the canvas for dimensions, and its 2d context for drawing it //// 05
var canvas, canvasContext; //// 05

window.onload = function() {
  canvas = document.getElementById('gameCanvas'); ////
  canvasContext = canvas.getContext('2d'); ////

  // these next few lines set up our game logic and render to happen n times a second //// 05
  var framesPerSecond = 30; //// 05
  setInterval(function() { //// 05
    moveEverything();  //// 05
    drawEverything(); //// 05
  }, 1000/framesPerSecond); //// 05
}

function moveEverything() {   //// 06
  ballX += ballSpeedX; // move the ball to the right by a small amount  //// 06
} //// 06

function drawEverything() { ////
  // console.log("ballX is now: " + ballX)
  // clear the game view by filling it with black
  canvasContext.fillStyle = '#222'; ////
  canvasContext.fillRect(0, 0, canvas.width, canvas.height); ////
  
  // draw a white circle
  canvasContext.fillStyle = '#fff'; ////
  canvasContext.beginPath(); ////
  canvasContext.arc(ballX, ballY, 10, 0, Math.PI*2, true); ////
  canvasContext.fill(); ////
} ////

  





