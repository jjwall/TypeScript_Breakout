import BaseEntity from './BaseEntity';

export default class Paddle extends BaseEntity
{
    currentVel: number;
    static maxVel: number = 8;
    static accl: number = .4;
    constructor(public xpos: number, 
                public ypos: number, 
                public height: number, 
                public width: number, 
                public currentVelocity: number = 0) 
    {
        super(xpos, ypos, height, width);
        this.currentVel = currentVelocity;
    }
    accelerate(currentVelocity: number, maxVelocity: number, direction: string)
    {
        switch(direction) {
            case "left":
            if (currentVelocity > -maxVelocity) {
                this.currentVel -= Paddle.accl;
                console.log(this.currentVel);
            }
            break;
            case "right":
            if (currentVelocity < maxVelocity) {
                this.currentVel += Paddle.accl;
                console.log(this.currentVel);
            }
            break;
            case "aimless":
            if (currentVelocity < 0) {
                this.currentVel += Paddle.accl;
            }
            else if (currentVelocity > 0) {
                this.currentVel -= Paddle.accl;
            }
            break;
        }
        this.x += this.currentVel;
    }
    update(keyLeft: boolean, keyRight: boolean)
    {
        if (keyLeft && !keyRight) {
            this.accelerate(this.currentVel, Paddle.maxVel, "left");
        }
        else if (keyRight && !keyLeft) {
            this.accelerate(this.currentVel, Paddle.maxVel, "right");
        }
        else if (!keyRight && !keyLeft || keyRight && keyLeft) {
            this.accelerate(this.currentVel, Paddle.maxVel, "aimless");
        }
    }
}