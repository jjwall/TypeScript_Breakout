import { BaseEntity } from './BaseEntity';
//import { ICollision } from '../interfaces/ICollision';

export class Block extends BaseEntity// implements ICollision
{
    constructor(public xpos: number,
                public ypos: number,
                public height: number,
                public width: number)
    {
        super(xpos, ypos, height, width);
    }
    // onHitSides(ballYVel: number, entityXpos: number, entityWidth: number, ballXpos: number, ballWidth: number): number
    // {
    //     return ballYVel;
    // }
    onHitTopAndBottom(ballXVel: number, entityXpos: number, entityWidth: number, ballXpos: number, ballWidth: number): number
    {
        return ballXVel;
    }
    onHit():void {
        this.isDead = true;
    }
}