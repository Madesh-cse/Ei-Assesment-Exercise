import type { Role } from "./Role.js";
import { Admin } from "./Admin.js";
import { Editor } from "./Editor.js";
import { Viewer } from "./Viewer.js";

export class RoleFactory {
  static createRole(roleType: string): Role {
    switch (roleType.toLowerCase()) {
      case "admin":
        return new Admin();
      case "editor":
        return new Editor();
      case "viewer":
        return new Viewer();
      default:
        throw new Error(`Role type "${roleType}" is not recognized.`);
    }
  }
}
