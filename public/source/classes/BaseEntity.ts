export abstract class BaseEntity
{
    x: number;
    y: number;
    h: number;
    w: number;
    isDead: boolean;
    constructor(public xpos: number,
                public ypos: number,
                public height: number,
                public width: number,
                public IsDead: boolean = false)
    {
        this.x = xpos;
        this.y = ypos;
        this.h = height;
        this.w = width;
        this.isDead = IsDead;
    }
    draw(ctx: CanvasRenderingContext2D) 
    {
        return ctx.rect(this.x, this.y, this.w, this.h);
    }
    abstract onHitTopAndBottom(ballXVel: number, entityXpos: number, entityWidth: number, ballXpos: number, ballWidth: number): number;
    abstract onHit(): void;
}