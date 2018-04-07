define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function renderBlocks() {
        function random() {
            return Math.floor(Math.random() * 2);
        }
        var partialPattern1 = new Array();
        for (var i = 0; i < 5; i++) {
            if (random() === 1) {
                partialPattern1.push(true);
            }
            else {
                partialPattern1.push(false);
            }
        }
        var partialPattern2 = partialPattern1;
        partialPattern2.reverse();
        var totalPattern = partialPattern1.concat(partialPattern2);
        return totalPattern;
    }
    exports.renderBlocks = renderBlocks;
});
