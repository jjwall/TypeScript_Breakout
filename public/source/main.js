define(["require", "exports", "./classes/Paddle", "./classes/Block", "./functions/drawEntities"], function (require, exports, Paddle_1, Block_1, drawEntities_1) {
    "use strict";
    exports.__esModule = true;
    var canvas = document.getElementById('gameScreen'), ctx = canvas.getContext('2d'), g = {
        canvasW: 800,
        canvasH: 1050,
        frameMilliSecond: 12,
        keyLeft: false,
        keyRight: false,
        entities: new Array()
    };
    var player = new Paddle_1.Paddle(350, 1000, 20, 100, g.canvasW);
    g.entities.push(player);
    var block1 = new Block_1.Block(500, 500, 50, 50);
    g.entities.push(block1);
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
    setInterval(function () {
        drawEntities_1.drawEntities(ctx, g.entities, g.canvasW, g.canvasH);
        player.update(g.keyLeft, g.keyRight);
    }, g.frameMilliSecond);
});
