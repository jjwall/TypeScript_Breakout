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
        var numberOfTruths = 0;
        partialPattern1.forEach(function (element) {
            if (element) {
                numberOfTruths++;
            }
        });
        if (numberOfTruths == 0) {
            return renderBlocks();
        }
        var partialPattern2 = partialPattern1.slice();
        partialPattern2.reverse();
        var totalPattern = partialPattern1.concat(partialPattern2);
        return totalPattern;
    }
    exports.renderBlocks = renderBlocks;
});
