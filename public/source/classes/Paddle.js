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
    var Paddle = (function (_super) {
        __extends(Paddle, _super);
        function Paddle(xpos, ypos, height, width, currentVelocity) {
            if (currentVelocity === void 0) { currentVelocity = 0; }
            var _this = _super.call(this, xpos, ypos, height, width) || this;
            _this.xpos = xpos;
            _this.ypos = ypos;
            _this.height = height;
            _this.width = width;
            _this.currentVelocity = currentVelocity;
            _this.currentVel = currentVelocity;
            return _this;
        }
        Paddle.prototype.accelerate = function (currentVelocity, maxVelocity, direction) {
            switch (direction) {
                case "left":
                    if (currentVelocity > -maxVelocity) {
                        this.currentVel -= Paddle.accl;
                        console.log(this.currentVel);
                    }
                    break;
                case "right":
                    if (currentVelocity < maxVelocity) {
                        this.currentVel += Paddle.accl;
                        console.log(this.currentVel);
                    }
                    break;
                case "aimless":
                    if (currentVelocity < 0) {
                        this.currentVel += Paddle.accl;
                    }
                    else if (currentVelocity > 0) {
                        this.currentVel -= Paddle.accl;
                    }
                    break;
            }
            this.x += this.currentVel;
        };
        Paddle.prototype.update = function (keyLeft, keyRight) {
            if (keyLeft && !keyRight) {
                this.accelerate(this.currentVel, Paddle.maxVel, "left");
            }
            else if (keyRight && !keyLeft) {
                this.accelerate(this.currentVel, Paddle.maxVel, "right");
            }
            else if (!keyRight && !keyLeft || keyRight && keyLeft) {
                this.accelerate(this.currentVel, Paddle.maxVel, "aimless");
            }
        };
        Paddle.maxVel = 8;
        Paddle.accl = .4;
        return Paddle;
    }(BaseEntity_1.BaseEntity));
    exports.Paddle = Paddle;
});
