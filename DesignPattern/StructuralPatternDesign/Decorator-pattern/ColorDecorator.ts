import { TextDecorator } from "./TextDecorator.js";

export class ColorDecorator extends TextDecorator {
  constructor(wrapped: TextDecorator["wrapped"], private color: string) {
    super(wrapped);
  }

  render(): string {
    const colorCodes: { [key: string]: string } = {
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      magenta: "\x1b[35m",
      cyan: "\x1b[36m",
    };

    const code = colorCodes[this.color.toLowerCase()] || "\x1b[0m";
    return `${code}${this.wrapped.render()}\x1b[0m`;
  }
}
