define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var BaseEntity = (function () {
        function BaseEntity(xpos, ypos, height, width, IsDead) {
            if (IsDead === void 0) { IsDead = false; }
            this.xpos = xpos;
            this.ypos = ypos;
            this.height = height;
            this.width = width;
            this.IsDead = IsDead;
            this.x = xpos;
            this.y = ypos;
            this.h = height;
            this.w = width;
            this.isDead = IsDead;
        }
        BaseEntity.prototype.draw = function (ctx) {
            return ctx.rect(this.x, this.y, this.w, this.h);
        };
        return BaseEntity;
    }());
    exports.BaseEntity = BaseEntity;
});
