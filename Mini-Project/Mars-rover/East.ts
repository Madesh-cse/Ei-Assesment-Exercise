import { Direction } from "./Directions.js";
import { Position } from "./Positions.js";
import { North } from "./North.js";
import { South } from "./South.js";

export class East implements Direction {
  move(position: Position): Position {
    return new Position(position.x + 1, position.y);
  }

  left(): Direction {
    return new North();
  }

  right(): Direction {
    return new South();
  }

  toString(): string {
    return "East";
  }
   toShortString(): string {
    return "E";
  }
}
