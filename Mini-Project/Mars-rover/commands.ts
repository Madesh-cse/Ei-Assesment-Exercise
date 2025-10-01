import { Rover } from "./Rover.js";

export interface Command {
  execute(rover: Rover): void;
}
