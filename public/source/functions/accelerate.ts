export default function accelerate(currentVel: number, maxVel: number, deaccelerate: boolean) {
    //switch(direction) {
        //case "left":
        if (deaccelerate) {
            if (currentVel > 0) {
                currentVel -= .5;
            }
        }
        else {
            if (currentVel < maxVel) {
                currentVel =+ .5;
            }
        }
        //break;
        //case "right":
        //break;
    //}
    //return (currentVel^2)/2;
    return currentVel;
}