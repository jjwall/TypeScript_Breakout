import { ICollision } from "../interfaces/ICollision";

export abstract class BaseEntity
{
    x: number;
    y: number;
    h: number;
    w: number;
    isDead: boolean;
    color: string;
    constructor(public xpos: number,
                public ypos: number,
                public height: number,
                public width: number,
                public Color: string = "grey",
                public IsDead: boolean = false)
    {
        this.x = xpos;
        this.y = ypos;
        this.h = height;
        this.w = width;
        this.isDead = IsDead;
        this.color = Color;
    }
    draw(ctx: CanvasRenderingContext2D) 
    {
        return ctx.rect(this.x, this.y, this.w, this.h);
    }
    isCollidable(object: any): object is ICollision {
        return true;
    }
}