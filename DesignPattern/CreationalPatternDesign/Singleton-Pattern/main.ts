import { CacheManagement } from "./CacheManagement.js";

const cache1 = CacheManagement.getInstance();
const cache2 = CacheManagement.getInstance();

console.log(cache1 === cache2); // true (Singleton)

// Time to live is 5 seconds
cache1.set("user1", { name: "Madesh", age: 25 }, 5);
cache1.set("user2", { name: "Naveen", age: 30 });

console.log("Get user1:", cache2.get("user1"));

// After 6 seconds it will get expired
setTimeout(() => {
  console.log("After 6 seconds, user1:", cache1.get("user1"));
}, 6000);

console.log("Get user2:", cache1.get("user2"));
