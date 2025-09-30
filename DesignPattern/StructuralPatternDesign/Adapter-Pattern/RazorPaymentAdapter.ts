import type { PaymentProcessor } from "./PaymentProcessor.js";
import { Razorpay } from "./Razorpay.js";

export class RazorPaymentAdapter implements PaymentProcessor {
  constructor(private razorpay: Razorpay) {}

  pay(amount: number): void {
    this.razorpay.transfer(amount);
  }
}
