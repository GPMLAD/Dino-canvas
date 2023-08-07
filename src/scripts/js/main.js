import { updateCanvasProps, clearMap } from './canvas.js';
import { Dino } from './dino.js';
updateCanvasProps();
var player = new Dino();
var animate = function () {
    clearMap();
    player.update();
    setTimeout(animate, 1000 / player.speed);
};
/*===== INITIALIZE =====*/
animate();
