import { Rider } from "./Rider.js";
import { ObserverDriver } from "./ObserverDriver.js";

const rider1 = new Rider("Tommy", "Chennai");
const rider2 = new Rider("Karthik", "Madurai");
const rider3 = new Rider("Nilesh", "Trichy");

const driver1 = new ObserverDriver("Madesh", "Chennai", "4");
const driver2 = new ObserverDriver("Pravin", "Madurai", "4.5");
const driver3 = new ObserverDriver("Ramesh", "Trichy", "5");

rider1.addDriver(driver1);
rider2.addDriver(driver2);
rider3.addDriver(driver3);

rider1.requestDriver();
rider2.requestDriver();
rider3.requestDriver();

console.log("\n✅ Driver Madesh accepts the ride");
rider1.removeDriver(driver1);

rider1.requestDriver();
rider3.requestDriver();
