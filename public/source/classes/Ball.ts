import { BaseEntity } from './BaseEntity';

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
                public currentVelocityX: number = 5,
                public currentVelocityY: number = 5)
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
            // lose a life
            this.currentVelY *= -1;
        }
        if (this.y <=0) {
            this.currentVelY *= -1;
        }
        this.x += this.currentVelX;
        this.y += this.currentVelY;
    }
    ballYVal(entityYPos: number, entityHeight: number, ballYPos: number, ballHeight: number) : void {
        console.log("hiY");
        let halfHeight = <number> (entityYPos + (entityHeight / 2));
        // i.e. top half of the entity
        if (ballYPos < halfHeight) {
            let ratio = <number> ((halfHeight - ballYPos) / 100);
            this.currentVelY = -3 * ratio;
        }
        // i.e. bottom half of the entity
        else if (ballYPos > halfHeight) {
            let ratio = <number> ((ballYPos - halfHeight) / 100);
            this.currentVelY = 3 * ratio;
            }
        else 
            this.currentVelocityY = 0;
    }
    ballXVal(entityXPos: number, entityWidth: number, ballXPos: number, ballWidth: number) : void {
        console.log("hiX");
        let halfWidth = <number> (entityXPos + (entityWidth / 2));
        // i.e. left half of the entity
        if (ballXPos < halfWidth) {
            let ratio = <number> ((halfWidth - ballWidth) / 100);
            this.currentVelX = -3 * ratio;
        }
        // i.e. right half of the entity
        else if (ballXPos > halfWidth) {
            let ratio = <number> ((ballXPos - halfWidth) / 100);
            this.currentVelX = 3 * ratio;
            }
        else 
            this.currentVelocityX = 0;
    }
    collide(entities: BaseEntity[]) : void
    {
        entities.forEach(entity => {
            if (this.x <= entity.x + entity.w &&
                this.x + this.w >= entity.x
                && this.y <= entity.y + entity.h &&
                this.h + this.y >= entity.y)
            {
                if ((this.y <= entity.y + entity.h || this.y + this.h >= entity.y)
                    && this.x > entity.x && this.x < entity.x + entity.w)
                {
                    this.currentVelY *= -1;
                    this.ballXVal(entity.x, entity.w, this.x, this.w);
                }
                if ((this.x + this.w >= entity.x || this.x <= entity.x + entity.w)
                    && this.y > entity.y && this.y < entity.y + entity.h)
                {
                    this.currentVelX *= -1;
                    this.ballYVal(entity.y, entity.h, this.y, this.h);
                }
            }
        });
    }
}