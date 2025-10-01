import { Position } from "./Positions.js";
import { Grid } from "./Grid.js";
import { Direction } from "./Directions.js";
import { Logger } from "./Logger.js";

export type CommandType = "M" | "L" | "R";

export class Rover {
  constructor(
    private position: Position,
    private direction: Direction,
    private readonly grid: Grid
  ) {
    if (!grid.isWithinBounds(position)) {
      throw new Error(
        `Invalid starting position (${position.x}, ${position.y}) outside the grid.`
      );
    }
    if (grid.hasObstacle(position)) {
      throw new Error(
        `Invalid starting position (${position.x}, ${position.y}) occupied by an obstacle.`
      );
    }
  }

  moveForward(): void {
    const newPos = this.direction.move(this.position);

    if (!this.grid.isWithinBounds(newPos)) {
      Logger.error(`Boundary reached at ${newPos.toString()}. rover cannot move outside the boundary or grid`);
      return;
    }

    if (this.grid.hasObstacle(newPos)) {
      Logger.warn(`Obstacle detected at ${newPos.toString()} rover cannot move due to obstacle found`);
      return;
    }

    this.position = newPos;
    // It help to point out every position of rover move
    // so it is very useful for an understanding
    Logger.info(`Rover moved to ${this.position.toString()}`);
  }

  turnLeft(): void {
    this.direction = this.direction.left();
  }

  turnRight(): void {
    this.direction = this.direction.right();
  }

  executeCommand(command: CommandType): void {
    switch (command) {
      case "M":
        this.moveForward();
        break;
      case "L":
        this.turnLeft();
        break;
      case "R":
        this.turnRight();
        break;
      default:
        throw new Error(`Invalid command "${command}". Use M, L, or R.`);
    }
  }

  getStatus(): string {
    const finalPos = `Final Position: (${this.position.x}, ${this.position.y}, ${this.direction.toShortString()})`;
    const report = `Status Report: "Rover is at (${this.position.x}, ${this.position.y}) facing ${this.direction.toString()}. ${
      this.grid.hasObstacle(this.position) ? "Obstacle detected!" : "No Obstacles detected."
    }"`;
    return `${finalPos}\n${report}`;
  }
}
