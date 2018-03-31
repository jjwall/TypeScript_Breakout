import { BaseEntity } from "../classes/BaseEntity";

export function drawEntities(ctx: CanvasRenderingContext2D, entities: BaseEntity[], canvasWidth: number, canvasHeight: number): void {
    ctx.strokeStyle = 'white';
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath()
    entities.forEach(entity => {
        entity.draw(ctx);
    });
    ctx.stroke();
}