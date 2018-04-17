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
        collidingEntities: new Array(),
        score: document.getElementById('scoreValue'),
        lives: document.getElementById('livesValue'),
        level: document.getElementById('levelValue'),
        startButton: document.getElementById('startButton'),
        scoreValue: 0,
        livesValue: 3,
        levelValue: 1
    };
    var player = new Paddle_1.Paddle(350, 1000, 20, 100, g.canvasW);
    var ball = new Ball_1.Ball(395, 600, 20, 20, g.canvasH, g.canvasW);
    g.entities.push(ball);
    g.entities.push(player);
    g.collidingEntities.push(player);
    g.score.innerHTML = g.scoreValue.toString();
    g.lives.innerHTML = g.livesValue.toString();
    g.level.innerHTML = g.levelValue.toString();
    g.startButton.onclick = function () {
        startGame();
    };
    function setUpLevel() {
        var verticalSpacing = 0;
        var horizontalSpacing = 0;
        var blockColor = "red";
        for (var y = 0; y < 10; y++) {
            switch (y) {
                case 0 || 1:
                    blockColor = "red";
                    break;
                case 2 || 3:
                    blockColor = "orange";
                    break;
                case 4 || 5:
                    blockColor = "yellow";
                    break;
                case 6 || 7:
                    blockColor = "green";
                    break;
                case 8:
                    blockColor = "blue";
                    break;
                case 9:
                    blockColor = "purple";
                    break;
            }
            var blocks = renderBlocks_1.renderBlocks();
            verticalSpacing += 50;
            horizontalSpacing = 0;
            for (var x = 0; x < blocks.length; x++) {
                horizontalSpacing += 30;
                if (blocks[x]) {
                    var block = new Block_1.Block(horizontalSpacing, verticalSpacing, 20, 60, blockColor);
                    g.entities.push(block);
                    g.collidingEntities.push(block);
                }
                horizontalSpacing += 45;
            }
        }
    }
    function loseLifeResetAndCheckLoseState() {
        g.livesValue--;
        g.lives.innerHTML = g.livesValue.toString();
        ball.x = 400;
        ball.y = 600;
        ball.currentVelX = 0;
        ball.currentVelY = 0;
        if (g.livesValue === 0) {
            return loseState();
        }
        setTimeout(function () {
            ball.currentVelY = 5;
        }, 3000);
    }
    exports.loseLifeResetAndCheckLoseState = loseLifeResetAndCheckLoseState;
    function addToScoreAndCheckWinState() {
        g.scoreValue += 10;
        g.score.innerHTML = g.scoreValue.toString();
        if (Block_1.Block.total === 0) {
            nextLevel();
        }
    }
    exports.addToScoreAndCheckWinState = addToScoreAndCheckWinState;
    function nextLevel() {
        setUpLevel();
        ball.x = 395;
        ball.y = 600;
        ball.currentVelX = 0;
        ball.currentVelY = 0;
        g.levelValue++;
        g.level.innerHTML = g.levelValue.toString();
        setTimeout(function () {
            ball.currentVelY = 5;
        }, 3000);
    }
    function loseState() {
        g.startButton.style.display = 'block';
    }
    function startGame() {
        Block_1.Block.total = 0;
        g.entities = [];
        g.collidingEntities = [];
        g.entities.push(ball);
        g.entities.push(player);
        g.collidingEntities.push(player);
        setUpLevel();
        g.startButton.style.display = 'none';
        g.scoreValue = 0;
        g.livesValue = 3;
        g.levelValue = 1;
        g.score.innerHTML = g.scoreValue.toString();
        g.lives.innerHTML = g.livesValue.toString();
        g.level.innerHTML = g.levelValue.toString();
        ball.x = 395;
        ball.y = 600;
        ball.currentVelY = 5;
    }
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
