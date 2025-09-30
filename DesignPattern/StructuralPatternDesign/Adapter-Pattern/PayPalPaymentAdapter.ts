import type { PaymentProcessor } from "./PaymentProcessor.js";
import { PayPal } from "./PayPal.js";

export class PayPalPaymentAdapter implements PaymentProcessor {
  constructor(private paypal: PayPal) {}

  pay(amount: number): void {
    this.paypal.sendPayment(amount);
  }
}
