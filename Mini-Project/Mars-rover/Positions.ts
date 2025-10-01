export class Position {
  constructor(public readonly x: number, public readonly y: number) {}

  toString(): string {
    return `(${this.x}, ${this.y})`;
  }
}
