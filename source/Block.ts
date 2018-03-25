class Block {
    x: number;
    y: number;
    h: number;
    w: number;
    constructor(public X: number, public Y: number, public H: number, public W: number) {
        this.x = X;
        this.y = Y;
        this.h = H;
        this.w = W;
    }
}

export { Block };