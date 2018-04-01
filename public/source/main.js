define(["require", "exports", "./classes/Paddle", "./classes/Ball", "./classes/Block", "./functions/drawEntities"], function (require, exports, Paddle_1, Ball_1, Block_1, drawEntities_1) {
    "use strict";
    exports.__esModule = true;
    var canvas = document.getElementById('gameScreen'), ctx = canvas.getContext('2d'), g = {
        canvasW: 800,
        canvasH: 1050,
        frameMilliSecond: 12,
        keyLeft: false,
        keyRight: false,
        entities: new Array(),
        collidingEntities: new Array()
    };
    var player = new Paddle_1.Paddle(350, 1000, 20, 100, g.canvasW);
    g.entities.push(player);
    g.collidingEntities.push(player);
    var block1 = new Block_1.Block(300, 500, 400, 400);
    g.entities.push(block1);
    g.collidingEntities.push(block1);
    var ball = new Ball_1.Ball(400, 300, 20, 20, g.canvasH, g.canvasW);
    g.entities.push(ball);
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
        ball.collide(g.collidingEntities);
        ball.update();
    }, g.frameMilliSecond);
});
