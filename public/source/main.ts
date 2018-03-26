//import Block = require("./Block");
import { Paddle } from './classes/Paddle';
import { Block } from './classes/Block';

// main global object
var canvas = <HTMLCanvasElement>document.getElementById('gameScreen'),
    ctx = <CanvasRenderingContext2D>canvas.getContext('2d'),
    m = {
    canvasW: 800,
    canvasH: 1050,
    keyLeft: false,
    keyRight: false,
    p: new Paddle(350, 1000, 20, 100, 7)
}

// keyboard controls
window.onkeydown = function(e) {
    if (e.keyCode === 37) {
        m.keyLeft = true;
    }
    if (e.keyCode === 39) {
        m.keyRight = true;
    }
}

window.onkeyup = function(e) {
    if (e.keyCode === 37) {
        m.keyLeft = false;
    }
    if (e.keyCode === 39) {
        m.keyRight = false;
    }
}

setInterval(function(){
    ctx.strokeStyle = 'white';
    ctx.clearRect(0, 0, m.canvasW, m.canvasH);
    ctx.beginPath();
    ctx.rect(m.p.x, m.p.y, m.p.w, m.p.h);
    ctx.stroke();
    if (m.keyLeft) {
        m.p.x -= m.p.v;
    }
    if (m.keyRight) {
        m.p.x += m.p.v;
    }
}, 16.6666666666666667);