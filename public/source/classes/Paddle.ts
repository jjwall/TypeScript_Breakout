import { BaseEntity } from './BaseEntity';
import { ICollision } from '../interfaces/ICollision';

export class Paddle extends BaseEntity //implements ICollision
{
    currentVel: number;
    static canvasW: number;
    static maxVel: number = 8;
    static accl: number = .4;
    constructor(public xpos: number,
                public ypos: number,
                public height: number,
                public width: number,
                public canvasW: number,
                public currentVelocity: number = 0) 
    {
        super(xpos, ypos, height, width);
        this.currentVel = currentVelocity;
    }
    accelerate(currentVelocity: number, maxVelocity: number, direction: string) : void
    {
        switch(direction) {
            case "left":
            if (currentVelocity > -maxVelocity) {
                this.currentVel -= Paddle.accl;
            }
            if (this.currentVel > 0 && this.x >= (this.canvasW - this.w)) {
                this.currentVel -= this.currentVel;
            }
            if (this.x >= 0)
                this.x += this.currentVel;
            break;
            case "right":
            if (currentVelocity < maxVelocity) {
                this.currentVel += Paddle.accl;
            }
            if (this.currentVel < 0 && this.x <= 0) {
                this.currentVel -= this.currentVel;
            }
            if (this.x <= (this.canvasW - this.w))
                this.x += this.currentVel;
            break;
            case "aimless":
            if (currentVelocity < 0) {
                this.currentVel += Paddle.accl;
            }
            else if (currentVelocity > 0) {
                this.currentVel -= Paddle.accl;
            }
            if (this.x >= 0 && this.x <= (this.canvasW - this.w))
                this.x += this.currentVel;
            break;
        }
            //console.log(this.w);
    }
    update(keyLeft: boolean, keyRight: boolean) : void
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
    onHitTopAndBottom(ballXVel: number, entityXpos: number, entityWidth: number, ballXpos: number, ballWidth: number): number
    {
        let halfWidth = <number> (entityXpos + (entityWidth / 2));
        let multiple = 10;
        // i.e. left half of the entity
        if (ballXpos + ballWidth < halfWidth) {
            let ratio = <number> ((halfWidth - ballXpos) / 100);
            if (ballXVel > 0) {
                return -multiple * ratio;
            }
            else {
                return multiple * ratio;
            }
        }
        // i.e. right half of the entity
        else if (ballXpos > halfWidth) {
            let ratio = <number> ((ballXpos - halfWidth) / 100);
            if (ballXVel < 0) {
                return multiple * ratio;
            }
            else {
                return -multiple * ratio;
            }
        }
        else 
            return 0;
    }
    onHit():void {}
}