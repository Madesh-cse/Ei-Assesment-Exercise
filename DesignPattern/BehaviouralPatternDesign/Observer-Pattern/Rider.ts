import type { Driver } from "./Driver.js";

export class Rider {
  private drivers: Driver[] = [];

  constructor(public name: string, public location: string) {}

  addDriver(driver: Driver): void {
    this.drivers.push(driver);
  }

  removeDriver(driver: Driver): void {
    this.drivers = this.drivers.filter((d) => d !== driver);
  }

  requestDriver(): void {
    console.log(`\n🚖 Rider ${this.name} requests a driver from ${this.location}`);
    this.notifyDriver();
  }

  private notifyDriver(): void {
    for (const driver of this.drivers) {
      driver.update(this.name, this.location);
    }
  }
}
