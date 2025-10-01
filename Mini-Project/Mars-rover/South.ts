import { Direction } from "./Directions.js";
import { Position } from "./Positions.js";
import { East } from "./East.js";
import { West } from "./West.js";

export class South implements Direction {
  move(position: Position): Position {
    return new Position(position.x, position.y - 1);
  }

  left(): Direction {
    return new East();
  }

  right(): Direction {
    return new West();
  }

  toString(): string {
    return "South";
  }
   toShortString(): string {
    return "S";
  }
}
