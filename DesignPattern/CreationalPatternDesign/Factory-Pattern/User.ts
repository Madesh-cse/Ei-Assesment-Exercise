import type { Role } from "./Role.js";

export class User {
  constructor(public name: string, public role: Role) {}

  can(permission: string): boolean {
    return this.role.can(permission);
  }

  describe(): void {
    console.log(`User: ${this.name}, Role: ${this.role.name}`);
    this.role.describe();
  }
}
