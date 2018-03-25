import { Block } from "./Block";

var block = new Block(5, 5, 5, 5);

setInterval(function(){
    block.x++;
    console.log(block.x);
}, 16.6666666666666667);