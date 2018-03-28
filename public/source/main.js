define(["require", "exports", "./classes/Paddle", "./classes/Block", "./functions/drawEntities"], function (require, exports, Paddle_1, Block_1, drawEntities_1) {
    "use strict";
    exports.__esModule = true;
    // main global object
    var canvas = document.getElementById('gameScreen'), ctx = canvas.getContext('2d'), g = {
        canvasW: 800,
        canvasH: 1050,
        frameMilliSecond: 12,
        keyLeft: false,
        keyRight: false,
        entities: new Array(),
        player: new Paddle_1["default"](350, 1000, 20, 100)
    };
    g.entities.push(g.player);
    var block1 = new Block_1["default"](500, 500, 50, 50);
    g.entities.push(block1);
    // keyboard controls
    window.onkeydown = function (e) {
        if (e.keyCode === 37) {
            g.keyLeft = true;
        }
        if (e.keyCode === 39) {
            g.keyRight = true;
        }
    };
    window.onkeyup = function (e) {
        if (e.keyCode === 37) {
            g.keyLeft = false;
        }
        if (e.keyCode === 39) {
            g.keyRight = false;
        }
    };
    // main loop
    setInterval(function () {
        drawEntities_1["default"](ctx, g.entities, g.canvasW, g.canvasH);
        g.player.update(g.keyLeft, g.keyRight);
    }, g.frameMilliSecond);
});
