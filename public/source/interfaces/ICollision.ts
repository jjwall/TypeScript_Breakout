import { Ball } from "../classes/Ball";

export interface ICollision {
    //onHitSides(ballYVel: number, entityXpos: number, entityWidth: number, ballXpos: number, ballWidth: number): number;
    onHitTopAndBottom(ballXVel: number, entityXpos: number, entityWidth: number, ballXpos: number, ballWidth: number): number
    onHitSides(ballYVel: number, entityYpos: number, entityHeight: number, ballYpos: number, ballHeight: number): number;
}