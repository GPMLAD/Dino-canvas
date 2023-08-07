export var canvas = document.getElementById('canvas');
export var ctx = canvas.getContext('2d');
export var updateCanvasProps = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 2;
};
window.addEventListener('resize', updateCanvasProps);
export var clearMap = function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};
