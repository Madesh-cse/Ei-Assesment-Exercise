import { TextDecorator } from "./TextDecorator.js";

export class UnderlineDecorator extends TextDecorator {
  render(): string {
    // ANSI escape for underline
    return `\x1b[4m${this.wrapped.render()}\x1b[0m`; 
  }
}
