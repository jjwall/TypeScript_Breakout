var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
define(["require", "exports", "./BaseEntity"], function (require, exports, BaseEntity_1) {
    "use strict";
    exports.__esModule = true;
    var Paddle = /** @class */ (function (_super) {
        __extends(Paddle, _super);
        function Paddle(xpos, ypos, height, width, currentVelocity, maxVelocity) {
            var _this = _super.call(this, xpos, ypos, height, width) || this;
            _this.xpos = xpos;
            _this.ypos = ypos;
            _this.height = height;
            _this.width = width;
            _this.currentVelocity = currentVelocity;
            _this.maxVelocity = maxVelocity;
            _this.currentVel = currentVelocity;
            _this.maxVel = maxVelocity;
            return _this;
        }
        Paddle.prototype.accelerate = function (currentVelocity, maxVelocity, deaccelerate, direction) {
            switch (direction) {
                case "left":
                    if (currentVelocity > -maxVelocity) {
                        this.currentVel -= .5;
                    }
                    break;
                case "right":
                    if (currentVelocity < maxVelocity) {
                        this.currentVel += .5;
                    }
                    break;
                case "aimless":
                    if (currentVelocity < 0) {
                        this.currentVel += .5;
                    }
                    else if (currentVelocity > 0) {
                        this.currentVel -= .5;
                    }
                    break;
            }
            this.x += this.currentVel;
        };
        return Paddle;
    }(BaseEntity_1["default"]));
    exports["default"] = Paddle;
});
