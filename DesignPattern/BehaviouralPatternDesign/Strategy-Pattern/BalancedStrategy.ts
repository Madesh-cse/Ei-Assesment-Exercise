import type { TradingStrategy } from "./TradingStrategy.js";
import type { CryptoBot } from "./CryptoBot.js";

export class BalancedStrategy implements TradingStrategy {
    execute(price: number, bot: CryptoBot): void {
        console.log(`Balanced Strategy: Buy and hold at price ${price}.`);
        bot.checkLossOrProfit(price);
    }
}
