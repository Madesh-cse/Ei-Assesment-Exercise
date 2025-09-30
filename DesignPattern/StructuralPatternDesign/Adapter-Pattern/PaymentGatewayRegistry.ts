import type { PaymentProcessor } from "./PaymentProcessor.js";

export class PaymentGatewayRegistry {
  private gateWay: Map<string, PaymentProcessor> = new Map();

  register(name: string, processor: PaymentProcessor) {
    this.gateWay.set(name.toLowerCase(), processor);
    console.log(`Gateway "${name}" registered`);
  }

  getProcessor(name: string): PaymentProcessor {
    const processor = this.gateWay.get(name.toLowerCase());
    if (!processor) throw new Error(`Gateway "${name}" not found`);
    return processor;
  }

  listGateways() {
    console.log("Available gateways:", [...this.gateWay.keys()].join(", "));
  }
}
