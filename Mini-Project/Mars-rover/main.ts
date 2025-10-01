import { Position } from "./Positions.js";
import { Grid } from "./Grid.js";
import { Rover, CommandType } from "./Rover.js";
import { North } from "./North.js";
import { Logger } from "./Logger.js";

function runSimulation(commands: string) {
  try {
    const grid = new Grid(10, 10, [new Position(2, 9), new Position(5, 5)]);
    const rover = new Rover(new Position(0, 0), new North(), grid);

    for (const c of commands.toUpperCase()) {
      if (!["M", "L", "R"].includes(c)) {
        throw new Error(`Invalid command "${c}"! Only M, L, or R are allowed.`);
      }
      rover.executeCommand(c as CommandType);
    }

    console.log(rover.getStatus());
  } catch (err: any) {
    Logger.error(err.message);
  }
}
runSimulation("MMRMMM");
// runSimulation("MMRMLM") // valid commands
// runSimulation("MMXLM"); //  throw error
