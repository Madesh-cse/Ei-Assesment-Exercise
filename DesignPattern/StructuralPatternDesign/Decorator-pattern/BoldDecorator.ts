import { TextDecorator } from "./TextDecorator.js";

export class BoldDecorator extends TextDecorator {
  render(): string {
    return `\x1b[1m${this.wrapped.render()}\x1b[0m`; // ANSI escape code for bold
  }
}
