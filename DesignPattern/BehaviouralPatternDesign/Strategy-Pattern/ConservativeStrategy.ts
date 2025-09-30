import type { TradingStrategy } from "./TradingStrategy.js";
import type { CryptoBot } from "./CryptoBot.js";

export class ConservativeStrategy implements TradingStrategy {
    execute(price: number, bot: CryptoBot): void {
        console.log(`Conservative Strategy: Only invest a little at price ${price}.`);
        bot.checkLossOrProfit(price);
    }
}
