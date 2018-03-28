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
    var Block = /** @class */ (function (_super) {
        __extends(Block, _super);
        function Block(xpos, ypos, height, width) {
            var _this = _super.call(this, xpos, ypos, height, width) || this;
            _this.xpos = xpos;
            _this.ypos = ypos;
            _this.height = height;
            _this.width = width;
            return _this;
        }
        return Block;
    }(BaseEntity_1["default"]));
    exports["default"] = Block;
});
