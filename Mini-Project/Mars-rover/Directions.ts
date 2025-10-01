import { Position } from "./Positions.js";

export interface Direction {
  move(position: Position): Position;
  left(): Direction;
  right(): Direction;
  toString(): string;
  toShortString(): string;
}
