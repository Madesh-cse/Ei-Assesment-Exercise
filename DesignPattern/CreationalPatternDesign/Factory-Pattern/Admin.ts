import type { Role } from "./Role.js";

export class Admin implements Role {
  name = "Admin";
  permission: string[] = ["read", "write", "delete"];

  can(permission: string): boolean {
    return this.permission.includes(permission);
  }

  describe(): void {
    console.log(`${this.name} Permissions: ${this.permission.join(", ")}`);
  }
}
