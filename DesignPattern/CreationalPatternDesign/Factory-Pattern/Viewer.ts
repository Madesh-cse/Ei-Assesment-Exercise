import type { Role } from "./Role.js";

export class Viewer implements Role {
  name = "Viewer";
  permission: string[] = ["read"];

  can(permission: string): boolean {
    return this.permission.includes(permission);
  }

  describe(): void {
    console.log(`${this.name} Permissions: ${this.permission.join(", ")}`);
  }
}
