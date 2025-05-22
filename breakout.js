const canvas = document.getElementById('breakout');
const ctx = canvas.getContext('2d');

var bg = new Image();
bg.src = "Media/bg_breakout.jpg";

const BALL_RADIUS = 8;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;

const hit = new Audio('Media/Brick Hit Ground Sound Effect.mp3');

var score = 0;



const ball = {
     x: canvas.width/2,
     y: canvas.height/2, 
     radius: BALL_RADIUS, 
     speed: 4, 
     dx: -3, 
     dy: -3
}

const paddle = {
     x: canvas.width/2 - PADDLE_WIDTH/2,
     y: canvas.height - PADDLE_HEIGHT - 50,
     width: PADDLE_WIDTH,
     height: PADDLE_HEIGHT,
     dx: 5,
}

const brick =  {
     width: 55,
     height: 20,
     offsetLeft: 20,
     fillColor: "#2e3458",
     strokeColor: "#FFF"

}

canvas.addEventListener('mousemove', getMousePos);

function getMousePos(evt) {
     let rect = canvas.getBoundingClientRect();

     paddle.x = evt.clientX - (PADDLE_WIDTH/2);
}
function update() {
     moveBall();
     ifOnEdgeBounce();
     ifOnPaddleBounce();
     ifTouchingBrick();
}

function drawBall() {
     ctx.fillStyle = "#ffcd05"
     ctx.beginPath();
     ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI*2, false);
     ctx.fill();
     ctx.strokeStyle = "2e3548";
     ctx.stroke();
     ctx.closePath();
}

function drawPaddle() {
     ctx.fillStyle = "#2e3548";
     ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
     ctx.strokeStyle = "#ffcd05";
     ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);
}

function render() {
     ctx.drawImage(bg, 0, 0);
     drawBall();
     drawPaddle();
     drawBricks();
     drawText(parseInt(score), 20, canvas.height - 20);
}

function game() {
     update();
     render();
}

function moveBall() {
     ball.x += ball.dx;
     ball.y += ball.dy;
}

function ifOnEdgeBounce() {

     // Top and bottom collision

     if (ball.y < 0 || ball.y>canvas.height) {
          ball.dy = -ball.dy;
     }

     // Left and right collision
     if (ball.x < 0 || ball.x > canvas.width) {
          ball.dx = -ball.dx;
     }
     
     hit.play();
}

function ifOnPaddleBounce() {
     if (ball.y > paddle.y && ball.x < (paddle.x + paddle.width)) {
          ball.dy = -ball.dy;
          hit.play();
     }
}

let bricks = [];

function createBricksArray() {
     for (let i=0; i<5; i++) {
          bricks[i] = {
               x: brick.offsetLeft + i * (brick.offsetLeft + brick.width),
               y: 40,
               status: true
          }
     }
}

function drawText(text, x, y) {
     ctx.fillStyle = "black";
     ctx.font = "20px Arial";
     ctx.fillText(text, x, y);
}

function drawBricks() {
     for (let i=0; i<5; i++) {
          let b = bricks[i];
          if (b.status) {
          ctx.fillStyle = brick.fillColor;
          ctx.fillRect(b.x, b.y, brick.width, brick.height);
          ctx.strokeStyle = brick.strokeColor;
          ctx.strokeRect(b.x, b.y, brick.width, brick.height);
          }
     }
}

createBricksArray();
    

function ifTouchingBrick() {


     // Loop over all bricks
     // For each brick, check if touching ball
     // If yes, then toggle status (true to false)

     for (let i = 0; i < bricks.length; i++) {
          let b = bricks[i];
           
               if (b.status && ball.x + ball.radius > b.x && ball.x - ball.radius < b.x + brick.width && ball.y + ball.radius > b.y && ball.y - ball.radius < b.y + brick.height) {
                         b.status = false;
                         ball.dy = -ball.dy;
                              }
                              }

          
                              hit.play();
                              score++;
          }


var FPS = 100;
const myInterval = setInterval(game, 1000/FPS);