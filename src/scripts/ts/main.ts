import { canvas, ctx, updateCanvasProps, clearMap } from './canvas.js';
import { Dino } from './dino.js';
updateCanvasProps();

const player = new Dino();

const animate = () => {
  clearMap();
  player.update();
  setTimeout(animate, 1000 / player.speed);
};
/*===== INITIALIZE =====*/
animate();
