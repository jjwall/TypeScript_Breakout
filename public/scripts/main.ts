//import Block = require("./Block");
import { Block } from "./Block";

var m = {
    ctxW: 800,
    ctxH: 1050
}

var block = new Block(5, 5, 5, 5);

setInterval(function(){
    block.x++;
    console.log(block.x);
}, 16.6666666666666667);