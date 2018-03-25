"use strict";
exports.__esModule = true;
var Block_1 = require("./Block");
var block = new Block_1.Block(5, 5, 5, 5);
setInterval(function () {
    block.x++;
    console.log(block.x);
}, 16.6666666666666667);
