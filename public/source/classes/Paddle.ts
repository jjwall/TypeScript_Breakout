export class Paddle {
    x: number;
    y: number;
    h: number;
    w: number;
    v: number;
    constructor(public xpos: number, public ypos: number, public height: number, public width: number, public velocity: number) {
        this.x = xpos;
        this.y = ypos;
        this.h = height;
        this.w = width;
        this.v = velocity;
    }
}