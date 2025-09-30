import { User } from "./User.js";

export class RoleManager {
  private users: User[] = [];

  addUser(user: User) {
    this.users.push(user);
    console.log(`User "${user.name}" added with role "${user.role.name}"`);
  }

  listUsers() {
    this.users.forEach((u) => u.describe());
  }
}
