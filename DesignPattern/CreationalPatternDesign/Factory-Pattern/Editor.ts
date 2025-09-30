import type { Role } from "./Role.js";

export class Editor implements Role {
  name = "Editor";
  permission: string[] = ["read", "write"];

  can(permission: string): boolean {
    return this.permission.includes(permission);
  }

  describe(): void {
    console.log(`${this.name} Permissions: ${this.permission.join(", ")}`);
  }
}
