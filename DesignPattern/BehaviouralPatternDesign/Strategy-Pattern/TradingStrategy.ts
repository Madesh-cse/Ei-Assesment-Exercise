import type { CryptoBot } from "./CryptoBot.js";

export interface TradingStrategy {
    execute(price: number, bot: CryptoBot): void;
}