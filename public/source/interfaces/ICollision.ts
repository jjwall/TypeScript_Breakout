import { BaseEntity } from "../classes/BaseEntity";

export interface ICollision {
    drawHitBox(x: number, y: number, h: number, w: number): void;
    onHit(collider: BaseEntity): void;
}