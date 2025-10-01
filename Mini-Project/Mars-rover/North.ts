import { Direction } from "./Directions.js";
import { Position } from "./Positions.js";
import { East } from "./East.js";
import { West } from "./West.js";

export class North implements Direction {
  move(position: Position): Position {
    return new Position(position.x, position.y + 1);
  }

  left(): Direction {
    return new West();
  }

  right(): Direction {
    return new East();
  }

  toString(): string {
    return "North";
  }
   toShortString(): string {
    return "N";
  }
}
