import { TextDecorator } from "./TextDecorator.js";

export class ItalicDecorator extends TextDecorator {
  render(): string {
    return `\x1b[3m${this.wrapped.render()}\x1b[0m`; // ANSI escape for italic
  }
}
