import { canvas, ctx } from './canvas.js';

interface Iposition {
  x: number;
  y: number;
}

interface Ivelocity {
  x: number;
  y: number;
}

export class Dino {
  width: number;
  height: number;
  position: Iposition;
  velocity: Ivelocity;
  constructor() {
    this.position = {
      x: 5,
      y: 0
    };

    this.velocity = {
      x: 0,
      y: 0
    };

    this.width = 90;
    this.height = 90;
  }

  jumpForce = 10;
  score = 0;
  gravity = 0.5;

  grounded = false;
  jumpTime = 0;
  doubleJump = false;

  isSquat = false;

  draw = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  };

  update = () => {
    this.position.y += this.velocity.y;
    if (!this.grounded) {
      this.jumpTime++;
    }

    if (this.position.y + this.height <= canvas.height) {
      this.velocity.y += this.gravity;
    } else {
      this.position.y = canvas.height - this.height;
      this.velocity.y = 0;
      this.grounded = true;
      this.doubleJump = false;
      this.jumpTime = 0;
    }

    this.draw();
  };

  jump = () => {
    if (this.grounded) {
      this.velocity.y -= this.jumpForce;
      this.grounded = false;
    } else if (this.jumpTime < 25 && !this.doubleJump) {
      this.velocity.y -= this.jumpForce;
      this.doubleJump = true;
    }
    if (this.isSquat) {
      this.height = this.height * 2;
      this.isSquat = false;
    }
  };

  squat = () => {
    if (this.grounded && !this.isSquat) {
      this.height = this.height / 2;
      this.isSquat = true;
    } else if (this.grounded && this.isSquat) {
      this.height = this.height * 2;
      this.isSquat = false;
    }
  };
}
