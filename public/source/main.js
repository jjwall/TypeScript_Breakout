define(["require", "exports", "./classes/Paddle", "./classes/Ball", "./classes/Block", "./functions/drawEntities", "./functions/renderBlocks"], function (require, exports, Paddle_1, Ball_1, Block_1, drawEntities_1, renderBlocks_1) {
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
    var blocks = renderBlocks_1.renderBlocks();
    var spacing = 0;
    for (var x = 0; x < blocks.length; x++) {
        spacing += 80;
        if (blocks[x]) {
            var block = new Block_1.Block(spacing, 200, 30, 70);
            g.entities.push(block);
            g.collidingEntities.push(block);
        }
    }
    var ball = new Ball_1.Ball(600, 300, 20, 20, g.canvasH, g.canvasW);
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
        g.entities = g.entities.filter(function (entity) { return !entity.isDead; });
        g.collidingEntities = g.collidingEntities.filter(function (entity) { return !entity.isDead; });
    }, g.frameMilliSecond);
});
