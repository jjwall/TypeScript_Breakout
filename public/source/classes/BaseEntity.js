define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var BaseEntity = /** @class */ (function () {
        function BaseEntity(xpos, ypos, height, width) {
            this.xpos = xpos;
            this.ypos = ypos;
            this.height = height;
            this.width = width;
            this.x = xpos;
            this.y = ypos;
            this.h = height;
            this.w = width;
        }
        BaseEntity.prototype.draw = function (ctx) {
            return ctx.rect(this.x, this.y, this.w, this.h);
        };
        return BaseEntity;
    }());
    exports["default"] = BaseEntity;
});
