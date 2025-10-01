import { Command } from "./commands.js";
import { Rover } from "./Rover.js";

export class RightCommand implements Command {
  execute(rover: Rover): void {
    rover.turnRight();
  }
}
