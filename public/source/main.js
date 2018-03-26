define(["require", "exports", "./classes/Paddle", "./functions/accelerate"], function (require, exports, Paddle_1, accelerate_1) {
    "use strict";
    exports.__esModule = true;
    // main global object
    var canvas = document.getElementById('gameScreen'), ctx = canvas.getContext('2d'), m = {
        canvasW: 800,
        canvasH: 1050,
        keyLeft: false,
        keyRight: false,
        p: new Paddle_1["default"](350, 1000, 20, 100, 0, 10)
    };
    // keyboard controls
    window.onkeydown = function (e) {
        if (e.keyCode === 37) {
            m.keyLeft = true;
        }
        if (e.keyCode === 39) {
            m.keyRight = true;
        }
    };
    window.onkeyup = function (e) {
        if (e.keyCode === 37) {
            m.keyLeft = false;
        }
        if (e.keyCode === 39) {
            m.keyRight = false;
        }
    };
    // main loop
    setInterval(function () {
        ctx.strokeStyle = 'white';
        ctx.clearRect(0, 0, m.canvasW, m.canvasH);
        ctx.beginPath();
        ctx.rect(m.p.x, m.p.y, m.p.w, m.p.h);
        ctx.stroke();
        if (m.keyLeft) {
            m.p.currentVel = accelerate_1["default"](m.p.currentVel, m.p.maxVel, false);
            m.p.x -= m.p.currentVel;
            console.log(m.p.currentVel);
        }
        if (m.keyRight) {
            m.p.currentVel = accelerate_1["default"](m.p.currentVel, m.p.maxVel, false);
            m.p.x += m.p.currentVel;
        }
        // if not these deaccelerate...
    }, 16.6666666666666667);
});
