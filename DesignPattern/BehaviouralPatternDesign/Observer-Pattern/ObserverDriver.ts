import type { Driver } from './Driver.js';

export class ObserverDriver implements Driver {
  constructor(
    public name: string,
    private city: string,
    public rating: string
  ) {}

  update(riderName: string, location: string): void {
    if (this.city === location) {
      console.log(
        `Driver ${this.name} [Rating: ${this.rating}] got notification: Rider ${riderName} at ${location}`
      );
    }
  }
}


