import { RoleFactory } from "./RoleFactory.js";
import { User } from "./User.js";
import { RoleManager } from "./RoleManager.js";

const adminRole = RoleFactory.createRole("admin");
const editorRole = RoleFactory.createRole("editor");
const viewerRole = RoleFactory.createRole("viewer");

const mad = new User("Madesh", adminRole);
const ram = new User("Ramesh", editorRole);
const prav = new User("Pravin", viewerRole);

const roleManager1 = new RoleManager();
roleManager1.addUser(mad);
roleManager1.addUser(ram);
roleManager1.addUser(prav);

roleManager1.listUsers();

console.log("Can Madesh delete?", mad.can("delete"));
console.log("Can Ramesh delete?", ram.can("delete"));
console.log("Can Pravin read?", prav.can("read"));
