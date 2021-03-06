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
define(["require", "exports", "./BaseEntity", "../main"], function (require, exports, BaseEntity_1, main_1) {
    "use strict";
    exports.__esModule = true;
    var Block = (function (_super) {
        __extends(Block, _super);
        function Block(xpos, ypos, height, width, Color) {
            var _this = _super.call(this, xpos, ypos, height, width, Color) || this;
            _this.xpos = xpos;
            _this.ypos = ypos;
            _this.height = height;
            _this.width = width;
            _this.Color = Color;
            Block.total++;
            return _this;
        }
        Block.prototype.onHitTopAndBottom = function (ballXVel, entityXpos, entityWidth, ballXpos, ballWidth) {
            return ballXVel;
        };
        Block.prototype.onHit = function () {
            if (!this.isDead) {
                Block.total--;
            }
            this.isDead = true;
            main_1.addToScoreAndCheckWinState();
        };
        Block.total = 0;
        return Block;
    }(BaseEntity_1.BaseEntity));
    exports.Block = Block;
});
