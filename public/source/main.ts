//import Block = require("./Block");
import Paddle from './classes/Paddle';
import Block from './classes/Block';
import BaseEntity from './classes/BaseEntity';
import drawEntities from './functions/drawEntities';

// main global object
var canvas = <HTMLCanvasElement>document.getElementById('gameScreen'),
    ctx = <CanvasRenderingContext2D>canvas.getContext('2d'),
    g = {
    canvasW: 800,
    canvasH: 1050,
    keyLeft: false,
    keyRight: false,
    entities: new Array<BaseEntity>(),
    player: new Paddle(350, 1000, 20, 100, 0, 10)
}

g.entities.push(g.player);

var block1 = new Block(500, 500, 50, 50);

g.entities.push(block1);

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

    if (g.keyLeft && !g.keyRight) {
        g.player.accelerate(g.player.currentVel, g.player.maxVel, false, "left");
    }
    else if (g.keyRight && !g.keyLeft) {
        g.player.accelerate(g.player.currentVel, g.player.maxVel, false, "right");
    }
    else if (!g.keyRight && !g.keyLeft || g.keyRight && g.keyLeft) {
        g.player.accelerate(g.player.currentVel, g.player.maxVel, false, "aimless");
    }
    
}, 16.6666666666666667);