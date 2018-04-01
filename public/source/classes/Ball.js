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
    var Ball = (function (_super) {
        __extends(Ball, _super);
        function Ball(xpos, ypos, height, width, canvasH, canvasW, currentVelocityX, currentVelocityY) {
            if (currentVelocityX === void 0) { currentVelocityX = 5; }
            if (currentVelocityY === void 0) { currentVelocityY = 5; }
            var _this = _super.call(this, xpos, ypos, height, width) || this;
            _this.xpos = xpos;
            _this.ypos = ypos;
            _this.height = height;
            _this.width = width;
            _this.canvasH = canvasH;
            _this.canvasW = canvasW;
            _this.currentVelocityX = currentVelocityX;
            _this.currentVelocityY = currentVelocityY;
            _this.currentVelX = currentVelocityX;
            _this.currentVelY = currentVelocityY;
            return _this;
        }
        Ball.prototype.update = function () {
            if (this.x >= this.canvasW - this.w) {
                this.currentVelX *= -1;
            }
            if (this.x <= 0) {
                this.currentVelX *= -1;
            }
            if (this.y >= this.canvasH - this.h) {
                this.currentVelY *= -1;
            }
            if (this.y <= 0) {
                this.currentVelY *= -1;
            }
            this.x += this.currentVelX;
            this.y += this.currentVelY;
        };
        Ball.prototype.ballYVal = function (entityYPos, entityHeight, ballYPos, ballHeight) {
            console.log("hiY");
            var halfHeight = (entityYPos + (entityHeight / 2));
            if (ballYPos < halfHeight) {
                var ratio = ((halfHeight - ballYPos) / 100);
                this.currentVelY = -3 * ratio;
            }
            else if (ballYPos > halfHeight) {
                var ratio = ((ballYPos - halfHeight) / 100);
                this.currentVelY = 3 * ratio;
            }
            else
                this.currentVelocityY = 0;
        };
        Ball.prototype.ballXVal = function (entityXPos, entityWidth, ballXPos, ballWidth) {
            console.log("hiX");
            var halfWidth = (entityXPos + (entityWidth / 2));
            if (ballXPos < halfWidth) {
                var ratio = ((halfWidth - ballWidth) / 100);
                this.currentVelX = -3 * ratio;
            }
            else if (ballXPos > halfWidth) {
                var ratio = ((ballXPos - halfWidth) / 100);
                this.currentVelX = 3 * ratio;
            }
            else
                this.currentVelocityX = 0;
        };
        Ball.prototype.collide = function (entities) {
            var _this = this;
            entities.forEach(function (entity) {
                if (_this.x <= entity.x + entity.w &&
                    _this.x + _this.w >= entity.x
                    && _this.y <= entity.y + entity.h &&
                    _this.h + _this.y >= entity.y) {
                    if ((_this.y <= entity.y + entity.h || _this.y + _this.h >= entity.y)
                        && _this.x > entity.x && _this.x < entity.x + entity.w) {
                        _this.currentVelY *= -1;
                        _this.ballXVal(entity.x, entity.w, _this.x, _this.w);
                    }
                    if ((_this.x + _this.w >= entity.x || _this.x <= entity.x + entity.w)
                        && _this.y > entity.y && _this.y < entity.y + entity.h) {
                        _this.currentVelX *= -1;
                        _this.ballYVal(entity.y, entity.h, _this.y, _this.h);
                    }
                }
            });
        };
        return Ball;
    }(BaseEntity_1.BaseEntity));
    exports.Ball = Ball;
});
