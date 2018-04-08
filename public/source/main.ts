import { Paddle } from './classes/Paddle';
import { Ball } from './classes/Ball';
import { Block } from './classes/Block';
import { BaseEntity } from './classes/BaseEntity';
import { drawEntities } from './functions/drawEntities';
import { renderBlocks } from './functions/renderBlocks';
//import { ICollision } from './interfaces/ICollision';

// TO DO:
// 1. Make level system
// 2. Add life system
// 3. Add score system
// 4. Add collision manifold subsystem to AABB system
// 5. Add menu system
// 6. Add high score system (Firebase? SQL? Mongo?)

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
let ball = new Ball(600, 300, 20, 20, g.canvasH, g.canvasW);
g.entities.push(ball);
g.entities.push(player);
g.collidingEntities.push(player);

function setUpLevel():void {
    let verticalSpacing = <number> 0;
    let horizontalSpacing = <number> 0;
    for (let y: number = 0; y < 10; y++) {
        let blocks = <Array<boolean>>renderBlocks();
        verticalSpacing += 50;
        horizontalSpacing = 0;
        for (let x: number = 0; x < blocks.length; x++) {
            horizontalSpacing += 30;
            if (blocks[x]) {
                let block = new Block(horizontalSpacing, verticalSpacing, 20, 60);
                g.entities.push(block);
                g.collidingEntities.push(block);
            }
            horizontalSpacing += 45;
        }
    }
}

setUpLevel();

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
    g.entities = g.entities.filter(entity => !entity.isDead);
    g.collidingEntities = g.collidingEntities.filter(entity => !entity.isDead);
}, g.frameMilliSecond);