define(["require", "exports", "./Block"], function (require, exports, Block_1) {
    "use strict";
    exports.__esModule = true;
    var m = {
        ctxW: 100,
        ctxH: 100
    };
    var block = new Block_1.Block(5, 5, 5, 5);
    setInterval(function () {
        block.x++;
        console.log(block.x);
    }, 16.6666666666666667);
});
