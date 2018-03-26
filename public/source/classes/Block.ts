export class Block {
    x: number;
    y: number;
    h: number;
    w: number;
    constructor(public xpos: number, public ypos: number, public height: number, public width: number) {
        this.x = xpos;
        this.y = ypos;
        this.h = height;
        this.w = width;
    }
}