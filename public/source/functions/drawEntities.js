define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function drawEntities(ctx, entities, canvasWidth, canvasHeight) {
        ctx.strokeStyle = 'white';
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.beginPath();
        entities.forEach(function (entity) {
            entity.draw(ctx);
        });
        ctx.stroke();
    }
    exports.drawEntities = drawEntities;
});
