import BaseEntity from './BaseEntity';

export default class Paddle extends BaseEntity
{
    currentVel: number;
    maxVel: number;
    constructor(public xpos: number, 
                public ypos: number, 
                public height: number, 
                public width: number, 
                public currentVelocity: number, 
                public maxVelocity: number) 
    {
        super(xpos, ypos, height, width);
        this.currentVel = currentVelocity;
        this.maxVel = maxVelocity;
    }
    accelerate(currentVelocity: number, maxVelocity: number, deaccelerate: boolean, direction: string)
    {
        switch(direction) {
            case "left":
            if (currentVelocity > -maxVelocity) {
                this.currentVel -= .5;
            }
            break;
            case "right":
            if (currentVelocity < maxVelocity) {
                this.currentVel += .5;
            }
            break;
            case "aimless":
            if (currentVelocity < 0) {
                this.currentVel += .5;
            }
            else if (currentVelocity > 0) {
                this.currentVel -= .5;
            }
            break;
        }
        this.x += this.currentVel;
    }
}