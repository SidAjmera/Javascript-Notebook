const canvas = document.getElementById('breakout');
const ctx = canvas.getContext('2d');

var bg = new Image();
bg.src = "Media/bg_breakout.jpg";

const BALL_RADIUS = 8;
const PADDLE_WIDTH = 100;
const PADDLE_HEIGHT = 20;

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

function update() {
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
}

function game() {
     update();
     render();
}

var FPS = 100;
const myInterval = setInterval(game, 1000/FPS);