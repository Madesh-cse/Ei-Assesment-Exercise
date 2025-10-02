import { TextDecorator } from "./TextDecorator.js";

export class ItalicDecorator extends TextDecorator {
  render(): string {
    // ANSI escape for italic
    return `\x1b[3m${this.wrapped.render()}\x1b[0m`; 
  }
}
