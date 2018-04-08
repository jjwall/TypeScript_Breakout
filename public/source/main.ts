import { Paddle } from './classes/Paddle';
import { Ball } from './classes/Ball';
import { Block } from './classes/Block';
import { BaseEntity } from './classes/BaseEntity';
import { drawEntities } from './functions/drawEntities';
import { renderBlocks } from './functions/renderBlocks';
//import { ICollision } from './interfaces/ICollision';

// TO DO:
// 1. Add collision manifold subsystem to AABB system
// 2. Add high score system (Firebase? SQL? Mongo?)
// 3. Add mobile controls
// 4. fix left / right collision mechanics
// 5. deploy to heroku
// 6. write up ReadMe

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
        collidingEntities: new Array <BaseEntity>(),
        score: <HTMLElement> document.getElementById('scoreValue'),
        lives: <HTMLElement> document.getElementById('livesValue'),
        level: <HTMLElement> document.getElementById('levelValue'),
        startButton: <HTMLElement> document.getElementById('startButton'),
        scoreValue: <number> 0,
        livesValue: <number> 3,
        levelValue: <number> 1
    }

// set up player, ball and ui
let player = new Paddle(350, 1000, 20, 100, g.canvasW);
let ball = new Ball(395, 600, 20, 20, g.canvasH, g.canvasW);
g.entities.push(ball);
g.entities.push(player);
g.collidingEntities.push(player);
g.score.innerHTML = g.scoreValue.toString();
g.lives.innerHTML = g.livesValue.toString();
g.level.innerHTML = g.levelValue.toString();

g.startButton.onclick = function() {
    startGame();
}

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

export function loseLifeResetAndCheckLoseState():void {
    g.livesValue--;
    g.lives.innerHTML = g.livesValue.toString();
    ball.x = 400;
    ball.y = 600;
    ball.currentVelX = 0;
    ball.currentVelY = 0;
    if (g.livesValue === 0) {
        return loseState();
    }
    setTimeout(function(){
        ball.currentVelY = 5;
    },3000);
}

export function addToScoreAndCheckWinState():void {
    g.scoreValue += 10;
    g.score.innerHTML = g.scoreValue.toString();
    if (Block.total === 0) {
        nextLevel();
    }
}

function nextLevel():void {
    setUpLevel();
    ball.x = 395;
    ball.y = 600;
    ball.currentVelX = 0;
    ball.currentVelY = 0;
    g.levelValue++;
    g.level.innerHTML = g.levelValue.toString();
    setTimeout(function(){
        ball.currentVelY = 5;
    },3000);
}

function loseState():void {
    // need add more like "You lost" message
    g.startButton.style.display = 'block';
}

function startGame():void {
    Block.total = 0;
    g.entities = <BaseEntity[]>[];
    g.collidingEntities = <BaseEntity[]>[];
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