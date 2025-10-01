import { Command } from "./commands.js";
import { Rover } from "./Rover.js";

export class LeftCommand implements Command {
  execute(rover: Rover): void {
    rover.turnLeft();
  }
}
