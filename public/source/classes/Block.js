define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Block = /** @class */ (function () {
        function Block(xpos, ypos, height, width) {
            this.xpos = xpos;
            this.ypos = ypos;
            this.height = height;
            this.width = width;
            this.x = xpos;
            this.y = ypos;
            this.h = height;
            this.w = width;
        }
        return Block;
    }());
    exports.Block = Block;
});
