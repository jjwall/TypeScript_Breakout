import { BaseEntity } from './BaseEntity';
import { loseLifeResetAndCheckLoseState } from './../main';
//import { ICollision } from '../interfaces/ICollision';

export class Ball extends BaseEntity
{
    currentVelX: number;
    currentVelY: number;
    static canvasH: number;
    static canvasW: number;
    constructor(public xpos: number,
                public ypos: number,
                public height: number,
                public width: number,
                public canvasH: number,
                public canvasW: number,
                public currentVelocityX: number = 0,
                public currentVelocityY: number = 0)
    {
        super(xpos, ypos, height, width);
        this.currentVelX = currentVelocityX;
        this.currentVelY = currentVelocityY;
    }
    update() : void
    {
        if (this.x >= this.canvasW - this.w) {
            this.currentVelX *= -1;
        }
        if (this.x <= 0) {
            this.currentVelX *= -1;
        }
        if (this.y >= this.canvasH - this.h) {
            loseLifeResetAndCheckLoseState();
        }
        if (this.y <=0) {
            this.currentVelY *= -1;
        }
        this.x += this.currentVelX;
        this.y += this.currentVelY;
    }
    collide(entities: BaseEntity[]): void
    {
        entities.forEach(entity => {
            if (this.x <= entity.x + entity.w &&
                this.x + this.w >= entity.x
                && this.y <= entity.y + entity.h &&
                this.h + this.y >= entity.y)
            {

                if ((this.x + this.w >= entity.x || this.x <= entity.x + entity.w)
                    && this.y + this.h > entity.y && this.y < entity.y + entity.h)
                {
                    this.currentVelX *= -1;
                    entity.onHit();
                }
                else if ((this.y <= entity.y + entity.h || this.y + this.h >= entity.y)
                    && this.x + this.w > entity.x && this.x < entity.x + entity.w)
                {
                    this.currentVelX = entity.onHitTopAndBottom(this.currentVelX, entity.x, entity.w, this.x, this.w);
                    this.currentVelY *= -1;
                    entity.onHit();
                }
            }
        });
    }
    onHitTopAndBottom(ballXVel: number, entityXpos: number, entityWidth: number, ballXpos: number, ballWidth: number): number
    {
        return 0;
    }
    onHit(): void{}
}