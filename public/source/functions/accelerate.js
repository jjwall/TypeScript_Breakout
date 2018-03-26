define(["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    function accelerate(currentVel, maxVel, deaccelerate) {
        //switch(direction) {
        //case "left":
        if (deaccelerate) {
            if (currentVel > 0) {
                currentVel -= .5;
            }
        }
        else {
            if (currentVel < maxVel) {
                currentVel = +.5;
            }
        }
        //break;
        //case "right":
        //break;
        //}
        //return (currentVel^2)/2;
        return currentVel;
    }
    exports["default"] = accelerate;
});
