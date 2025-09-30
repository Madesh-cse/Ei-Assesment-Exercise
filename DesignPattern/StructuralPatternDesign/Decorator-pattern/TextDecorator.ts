import type { Content } from "./Content.js";

export abstract class TextDecorator implements Content {
  constructor(protected wrapped: Content) {}

  abstract render(): string;
}
