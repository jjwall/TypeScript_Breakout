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
        function Block(xpos, ypos, height, width) {
            var _this = _super.call(this, xpos, ypos, height, width) || this;
            _this.xpos = xpos;
            _this.ypos = ypos;
            _this.height = height;
            _this.width = width;
            return _this;
        }
        Block.prototype.onHitTopAndBottom = function (ballXVel, entityXpos, entityWidth, ballXpos, ballWidth) {
            return ballXVel;
        };
        Block.prototype.onHit = function () {
            this.isDead = true;
            main_1.addToScoreAndCheckWinState();
        };
        return Block;
    }(BaseEntity_1.BaseEntity));
    exports.Block = Block;
});
