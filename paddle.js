function Paddle(x, side) {
  this.x = x;
  this.width = 10;
  this.height = 85;
  this.y = height / 2;
  this.vy = 0;
  this.side = side; // 1 = left, 2 = right

  this.update = function () {
    // W S for left, up down for right
    let up = keyIsDown(this.side == 1 ? 87 : UP_ARROW);
    let down = keyIsDown(this.side == 1 ? 83 : DOWN_ARROW);
    if (up) {
      this.vy = -2;
    }
    if (down) {
      this.vy = 2;
    }
    if (!up && !down) {
      this.vy = 0;
    }

    this.y += this.vy;
    this.y = constrain(this.y, this.height / 2, height - this.height / 2);
  }

  this.show = function () {
    fill(255);
    rect(this.x, this.y, this.width, this.height);
  }

}
