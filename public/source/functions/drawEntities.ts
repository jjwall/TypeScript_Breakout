import { BaseEntity } from "../classes/BaseEntity";

export function drawEntities(ctx: CanvasRenderingContext2D, entities: BaseEntity[], canvasWidth: number, canvasHeight: number): void {
    ctx.strokeStyle = 'white';
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath()
    entities.forEach(entity => {
        //ctx.strokeStyle = entity.color;
        ctx.fillStyle = entity.color;
        ctx.fillRect(entity.x, entity.y, entity.w, entity.h);
        entity.draw(ctx);
    });
    ctx.stroke();
}