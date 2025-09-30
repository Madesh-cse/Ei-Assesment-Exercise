import type { TradingStrategy } from "./TradingStrategy.js";

export class CryptoBot {

    public loss: number = 0;
    public profit: number = 0;

    constructor(public strategy: TradingStrategy) {}

    setStrategy(strategy: TradingStrategy) {
        this.strategy = strategy;
        console.log(`Strategy switched to ${strategy.constructor.name}`);
    }

    trade(price: number) {
        this.strategy.execute(price, this);
    }

    setLoss(price: number){
        this.loss = price;
        console.log(`Loss value are set at price of ${price}`);
    }

    setProfit(price:number){
        this.profit = price;
        console.log(`Profit value are set at price of ${price}`);
    }

    checkLossOrProfit(price: number){
        if(this.loss && price <= this.loss){
            console.log(`setLoss is reached sell at ${price}`);
        }
        if(this.profit && price >= this.profit){
            console.log(`setProfit is reached sell at ${price}`);
        }
    }

}
