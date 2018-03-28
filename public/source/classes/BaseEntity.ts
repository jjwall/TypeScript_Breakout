export default abstract class BaseEntity
{
    x: number;
    y: number;
    h: number;
    w: number;
    constructor(public xpos: number,
                public ypos: number,
                public height: number,
                public width: number)
    {
        this.x = xpos;
        this.y = ypos;
        this.h = height;
        this.w = width;
    }
    draw(ctx: CanvasRenderingContext2D) 
    {
        return ctx.rect(this.x, this.y, this.w, this.h);
    }
}