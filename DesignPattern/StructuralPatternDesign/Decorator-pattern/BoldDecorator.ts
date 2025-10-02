import { TextDecorator } from "./TextDecorator.js";

export class BoldDecorator extends TextDecorator {
  render(): string {
    // ANSI escape code for bold
    return `\x1b[1m${this.wrapped.render()}\x1b[0m`; 
  }
}
