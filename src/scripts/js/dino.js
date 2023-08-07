import { canvas, ctx } from './canvas.js';
var Dino = /** @class */ (function () {
    function Dino() {
        var _this = this;
        this.speed = 5;
        this.score = 0;
        this.gravity = 0.5;
        this.draw = function () {
            ctx.fillStyle = 'black';
            ctx.fillRect(_this.position.x, _this.position.y, _this.width, _this.height);
        };
        this.update = function () {
            _this.draw();
            _this.position.y += _this.velocity.y;
            if (_this.position.y + _this.height <= canvas.height) {
                _this.velocity.y += _this.gravity;
            }
            else {
                _this.position.y = canvas.height - _this.height;
                _this.velocity.y = 0;
            }
        };
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
    return Dino;
}());
export { Dino };
