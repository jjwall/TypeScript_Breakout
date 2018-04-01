//import Block = require("./Block");
import { Paddle } from './classes/Paddle';
import { Ball } from './classes/Ball';
import { Block } from './classes/Block';
import { BaseEntity } from './classes/BaseEntity';
import { drawEntities } from './functions/drawEntities';

// main global object
let canvas = <HTMLCanvasElement>document.getElementById('gameScreen'),
    ctx = <CanvasRenderingContext2D>canvas.getContext('2d'),
    g = {
        canvasW: <number> 800,
        canvasH: <number> 1050,
        frameMilliSecond: <number> 12, // 16.6666666666666667 -> would be 60 frames/sec (12 is less choppy)
        keyLeft: <boolean> false,
        keyRight: <boolean> false,
        entities: new Array <BaseEntity>(),
        collidingEntities: new Array <BaseEntity>()
    }

let player = new Paddle(350, 1000, 20, 100, g.canvasW);
g.entities.push(player);
g.collidingEntities.push(player);
let block1 = new Block(300, 500, 400, 400);
g.entities.push(block1);
g.collidingEntities.push(block1);
let ball = new Ball(400, 300, 20, 20, g.canvasH, g.canvasW);
g.entities.push(ball);

// keyboard controls
window.onkeydown = function(e) {
    if (e.keyCode === 37) {
        g.keyLeft = true;
    }
    if (e.keyCode === 39) {
        g.keyRight = true;
    }
}

window.onkeyup = function(e) {
    if (e.keyCode === 37) {
        g.keyLeft = false;
    }
    if (e.keyCode === 39) {
        g.keyRight = false;
    }
}

// main loop
setInterval(function(){
    drawEntities(ctx, g.entities, g.canvasW, g.canvasH);
    player.update(g.keyLeft, g.keyRight);
    ball.collide(g.collidingEntities);
    ball.update();
}, g.frameMilliSecond);