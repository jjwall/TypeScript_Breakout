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
        function Paddle(xpos, ypos, height, width, canvasW, currentVelocity) {
            if (currentVelocity === void 0) { currentVelocity = 0; }
            var _this = _super.call(this, xpos, ypos, height, width) || this;
            _this.xpos = xpos;
            _this.ypos = ypos;
            _this.height = height;
            _this.width = width;
            _this.canvasW = canvasW;
            _this.currentVelocity = currentVelocity;
            _this.currentVel = currentVelocity;
            return _this;
        }
        Paddle.prototype.accelerate = function (currentVelocity, maxVelocity, direction) {
            switch (direction) {
                case "left":
                    if (currentVelocity > -maxVelocity) {
                        this.currentVel -= Paddle.accl;
                    }
                    if (this.currentVel > 0 && this.x >= (this.canvasW - this.w)) {
                        this.currentVel -= this.currentVel;
                    }
                    if (this.x >= 0)
                        this.x += this.currentVel;
                    break;
                case "right":
                    if (currentVelocity < maxVelocity) {
                        this.currentVel += Paddle.accl;
                    }
                    if (this.currentVel < 0 && this.x <= 0) {
                        this.currentVel -= this.currentVel;
                    }
                    if (this.x <= (this.canvasW - this.w))
                        this.x += this.currentVel;
                    break;
                case "aimless":
                    if (currentVelocity < 0) {
                        this.currentVel += Paddle.accl;
                        if (this.currentVel > -.1) {
                            this.currentVel = 0;
                        }
                    }
                    else if (currentVelocity > 0) {
                        this.currentVel -= Paddle.accl;
                        if (this.currentVel < .1) {
                            this.currentVel = 0;
                        }
                    }
                    if (this.x >= 0 && this.x <= (this.canvasW - this.w)) {
                        this.x += this.currentVel;
                    }
                    break;
            }
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
        Paddle.prototype.onHitTopAndBottom = function (ballXVel, entityXpos, entityWidth, ballXpos, ballWidth) {
            var halfWidth = (entityXpos + (entityWidth / 2));
            var multiple = 10;
            if (ballXpos + ballWidth < halfWidth) {
                var ratio = ((halfWidth - ballXpos) / 100);
                return -multiple * ratio;
            }
            else if (ballXpos > halfWidth) {
                var ratio = ((ballXpos - halfWidth) / 100);
                return multiple * ratio;
            }
            else
                return 0;
        };
        Paddle.prototype.onHit = function () { };
        Paddle.maxVel = 8;
        Paddle.accl = .4;
        return Paddle;
    }(BaseEntity_1.BaseEntity));
    exports.Paddle = Paddle;
});
