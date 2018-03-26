export default class Paddle {
    x: number;
    y: number;
    h: number;
    w: number;
    currentVel: number;
    maxVel: number;
    constructor(public xpos: number, public ypos: number, public height: number, public width: number, public currentVelocity: number, public maxVelocity: number) {
        this.x = xpos;
        this.y = ypos;
        this.h = height;
        this.w = width;
        this.currentVel = currentVelocity;
        this.maxVel = maxVelocity;
    }
}