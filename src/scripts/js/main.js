import { updateCanvasProps, clearMap } from './canvas.js';
import { Dino } from './dino.js';
updateCanvasProps();
var player = new Dino();
var keyDown = function (event) {
    switch (event.keyCode) {
        case 37:
            //console.log(event);
            break;
        case 38:
            player.jump();
            //console.log(event);
            break;
        case 39:
            //console.log(event);
            break;
        case 40:
            if (player.velocity.y <= 0.5) {
                player.height = player.height / 2;
            }
            break;
    }
};
document.body.addEventListener('keydown', keyDown);
var animate = function () {
    clearMap();
    player.update();
    requestAnimationFrame(animate);
};
/*===== INITIALIZE =====*/
animate();
