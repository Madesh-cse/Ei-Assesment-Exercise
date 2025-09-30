import { TextDecorator } from "./TextDecorator.js";

export class UnderlineDecorator extends TextDecorator {
  render(): string {
    return `\x1b[4m${this.wrapped.render()}\x1b[0m`; // ANSI escape for underline
  }
}
