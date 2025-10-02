import { CryptoBot } from "./CryptoBot.js";
import { AggressiveStrategy } from "./AggressiveStrategy.js";
import { ConservativeStrategy } from "./ConservativeStrategy.js";
import { BalancedStrategy } from "./BalancedStrategy.js";

// Create bot with initial strategy
const bot = new CryptoBot(new ConservativeStrategy());

bot.setLoss(48700);
bot.setProfit(51500);

const marketPrices = [50000, 51000, 48700, 52000];

console.log("\n Using Conservative Strategy");
marketPrices.forEach((price) => bot.trade(price));

console.log("\n Switching to Aggressive Strategy");
bot.setStrategy(new AggressiveStrategy());
marketPrices.forEach((price) => bot.trade(price));

console.log("\n Switching to Balanced Strategy");
bot.setStrategy(new BalancedStrategy());
marketPrices.forEach((price) => bot.trade(price));
