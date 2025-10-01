import { Direction } from "./Directions.js";
import { Position } from "./Positions.js";
import { North } from "./North.js";
import { South } from "./South.js";

export class West implements Direction {
  move(position: Position): Position {
    return new Position(position.x - 1, position.y);
  }

  left(): Direction {
    return new South();
  }

  right(): Direction {
    return new North();
  }

  toString(): string {
    return "West";
  }
   toShortString(): string {
    return "W";
  }
}
