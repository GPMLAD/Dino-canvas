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
    this.height = canvas.height / 3;
  }
  speed = 5;
  score = 0;
  gravity = 0.5;

  draw = () => {
    ctx.fillStyle = 'black';
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  };

  update = () => {
    this.draw();
    this.position.y += this.velocity.y;

    if (this.position.y + this.height <= canvas.height) {
      this.velocity.y += this.gravity;
    } else {
      this.position.y = canvas.height - this.height;
      this.velocity.y = 0;
    }
  };
}
