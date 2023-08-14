import { canvas, ctx } from './canvas.js';
var Dino = /** @class */ (function () {
    function Dino() {
        var _this = this;
        this.jumpForce = 10;
        this.score = 0;
        this.gravity = 0.5;
        this.grounded = false;
        this.jumpTime = 0;
        this.doubleJump = false;
        this.draw = function () {
            ctx.fillStyle = 'black';
            ctx.fillRect(_this.position.x, _this.position.y, _this.width, _this.height);
        };
        this.update = function () {
            _this.position.y += _this.velocity.y;
            if (!_this.grounded) {
                _this.jumpTime++;
            }
            if (_this.position.y + _this.height <= canvas.height) {
                _this.velocity.y += _this.gravity;
            }
            else {
                _this.position.y = canvas.height - _this.height;
                _this.velocity.y = 0;
                _this.grounded = true;
                _this.doubleJump = false;
                _this.jumpTime = 0;
            }
            _this.draw();
        };
        this.jump = function () {
            if (_this.grounded) {
                _this.velocity.y -= _this.jumpForce;
                _this.grounded = false;
            }
            else if (_this.jumpTime < 25 && !_this.doubleJump) {
                _this.velocity.y -= _this.jumpForce;
                _this.doubleJump = true;
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
        this.height = 90;
    }
    return Dino;
}());
export { Dino };
