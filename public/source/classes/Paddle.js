define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Paddle = /** @class */ (function () {
        function Paddle(xpos, ypos, height, width, velocity) {
            this.xpos = xpos;
            this.ypos = ypos;
            this.height = height;
            this.width = width;
            this.velocity = velocity;
            this.x = xpos;
            this.y = ypos;
            this.h = height;
            this.w = width;
            this.v = velocity;
        }
        return Paddle;
    }());
    exports.Paddle = Paddle;
});
