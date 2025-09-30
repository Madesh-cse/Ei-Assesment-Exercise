import type { PaymentProcessor } from "./PaymentProcessor.js";
import { Stripe } from "./Stripe.js";

export class StripePaymentAdapter implements PaymentProcessor {
  constructor(private stripe: Stripe) {}

  pay(amount: number): void {
    this.stripe.sendPayment(amount);
  }
}
