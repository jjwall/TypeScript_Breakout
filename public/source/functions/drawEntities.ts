export default function drawEntities(ctx, entities, canvasWidth, canvasHeight) {
    ctx.strokeStyle = 'white';
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.beginPath()
    entities.forEach(entity => {
        entity.draw(ctx);
    });
    ctx.stroke();
}