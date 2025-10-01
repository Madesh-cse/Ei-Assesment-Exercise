import { Command } from "./commands.js";
import { Rover } from "./Rover.js";

export class MoveCommand implements Command {
  execute(rover: Rover): void {
    rover.moveForward();
  }
}
