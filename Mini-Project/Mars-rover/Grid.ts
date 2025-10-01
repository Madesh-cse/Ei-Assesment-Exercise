import { Position } from "./Positions.js";

export class Grid {
  constructor(
    private readonly width: number,
    private readonly height: number,
    private readonly obstacles: Position[] = []
  ) {}

  isWithinBounds(pos: Position): boolean {
    return pos.x >= 0 && pos.x < this.width && pos.y >= 0 && pos.y < this.height;
  }

  hasObstacle(pos: Position): boolean {
    return this.obstacles.some(o => o.x === pos.x && o.y === pos.y);
  }
}
