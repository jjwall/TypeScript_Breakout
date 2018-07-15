export interface ICollision {
    onHitTopAndBottom(ballXVel: number, entityXpos: number, entityWidth: number, ballXpos: number, ballWidth: number): number;
    onHit(): void;
}