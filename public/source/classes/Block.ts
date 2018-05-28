import { BaseEntity } from './BaseEntity';
import { addToScoreAndCheckWinState } from '../main';
import { ICollision } from '../interfaces/ICollision';

export class Block extends BaseEntity implements ICollision
{
    static total: number = 0;
    constructor(public xpos: number,
                public ypos: number,
                public height: number,
                public width: number,
                public Color: string)
    {
        super(xpos, ypos, height, width, Color);
        Block.total++;
    }
    onHitTopAndBottom(ballXVel: number, entityXpos: number, entityWidth: number, ballXpos: number, ballWidth: number): number
    {
        return ballXVel;
    }
    onHit():void {
        if (!this.isDead) {
            Block.total--;
        }
        this.isDead = true;
        addToScoreAndCheckWinState();
    }
}