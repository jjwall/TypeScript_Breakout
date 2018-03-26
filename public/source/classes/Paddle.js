define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var Paddle = /** @class */ (function () {
        function Paddle(xpos, ypos, height, width, currentVelocity, maxVelocity) {
            this.xpos = xpos;
            this.ypos = ypos;
            this.height = height;
            this.width = width;
            this.currentVelocity = currentVelocity;
            this.maxVelocity = maxVelocity;
            this.x = xpos;
            this.y = ypos;
            this.h = height;
            this.w = width;
            this.currentVel = currentVelocity;
            this.maxVel = maxVelocity;
        }
        return Paddle;
    }());
    exports["default"] = Paddle;
});
