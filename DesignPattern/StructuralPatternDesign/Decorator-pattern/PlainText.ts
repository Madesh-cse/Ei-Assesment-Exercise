import type { Content } from "./Content.js";

export class PlainText implements Content {
  constructor(private content: string) {}

  render(): string {
    return this.content;
  }
}
