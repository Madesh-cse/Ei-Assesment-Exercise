import type { TradingStrategy } from "./TradingStrategy.js";
import type { CryptoBot } from "./CryptoBot.js";

export class AggressiveStrategy implements TradingStrategy {
    execute(price: number, bot: CryptoBot): void {
        console.log(`Aggressive Strategy: Buy more at price ${price}!`);
        bot.checkLossOrProfit(price);
    }
}
