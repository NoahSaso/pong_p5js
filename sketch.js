var ball;

var leftPaddle;
var rightPaddle;

function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  ball = new Ball();
  leftPaddle = new Paddle(30, 1);
  rightPaddle = new Paddle(470, 2);
}

function draw() {
  background(0);
  ball.update();
  ball.show();
  leftPaddle.update();
  leftPaddle.show();
  rightPaddle.update();
  rightPaddle.show();
  ball.checkCollide(leftPaddle);
  ball.checkCollide(rightPaddle);
}
