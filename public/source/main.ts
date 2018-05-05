import { Paddle } from './classes/Paddle';
import { Ball } from './classes/Ball';
import { Block } from './classes/Block';
import { BaseEntity } from './classes/BaseEntity';
import { drawEntities } from './functions/drawEntities';
import { renderBlocks } from './functions/renderBlocks';
import { submitScore } from './functions/submitScore';
//import { ICollision } from './interfaces/ICollision';

// TO DO:
// 1. Write BallPaddleManifold class that handles ball / paddle collision through collision manifolds
// 2. Add sounds

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
        highscoreTable: <HTMLElement> document.getElementById('highscoreTable'),
        scoreValue: <number> 0,
        livesValue: <number> 3,
        levelValue: <number> 1,
        touchLeft: <HTMLElement> document.getElementById('touchLeft'),
        touchRight: <HTMLElement> document.getElementById('touchRight')
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
    let blockColor = <string>"red";
    for (let y: number = 0; y < 10; y++) {
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
        let blocks = <Array<boolean>>renderBlocks();
        verticalSpacing += 50;
        horizontalSpacing = 0;
        for (let x: number = 0; x < blocks.length; x++) {
            horizontalSpacing += 30;
            if (blocks[x]) {
                let block = new Block(horizontalSpacing, verticalSpacing, 20, 60, blockColor);
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
    ball.x = 395;
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
    var playerName = prompt("Enter your name:");
    submitScore(playerName, g.scoreValue, g.levelValue);
    g.startButton.style.display = 'block';
    displayHighscores();
}

function startGame():void {
    g.highscoreTable.innerHTML = "";
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

// touch controls
g.touchLeft.addEventListener('touchstart', touchLeftStart, false);
g.touchLeft.addEventListener('touchend', touchLeftEnd, false);

g.touchRight.addEventListener('touchstart', touchRightStart, false);
g.touchRight.addEventListener('touchend', touchRightEnd, false);

function touchLeftStart(e:any):void {
    g.keyLeft = true;
    
    // code to disable double tap zoom
    var t2 = e.timeStamp;
    var t1 = e.currentTarget.dataset.lastTouch || t2;
    var dt = t2 - t1;
    var fingers = e.touches.length;
    e.currentTarget.dataset.lastTouch = t2;
  
    if (!dt || dt > 500 || fingers > 1) return; // not double-tap
  
    e.preventDefault();
    e.target.click();
}

function touchLeftEnd():void {
    g.keyLeft = false;
}

function touchRightStart(e:any):void {
    g.keyRight = true;

    // code to disable double tap zoom
    var t2 = e.timeStamp;
    var t1 = e.currentTarget.dataset.lastTouch || t2;
    var dt = t2 - t1;
    var fingers = e.touches.length;
    e.currentTarget.dataset.lastTouch = t2;

    if (!dt || dt > 500 || fingers > 1) return; // not double-tap

    e.preventDefault();
    e.target.click();
}

function touchRightEnd():void {
    g.keyRight = false;
}

function displayHighscores():void {
    fetch(window.location.href + 'highscores')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        var tableString = "";
        tableString +=
            `<tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
                <th>Level</th>
            </tr>`;
        for (var i = 0; i < myJson.length; i++) {
            tableString += 
                `<tr>
                    <td>${i + 1}</td>
                    <td>${myJson[i].Name}</td>
                    <td>${myJson[i].Score}</td>
                    <td>${myJson[i].Level}</td>
                </tr>`;
        }
        g.highscoreTable.innerHTML = tableString;
    });
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