import { PayPal } from "./PayPal.js";
import { Stripe } from "./Stripe.js";
import { Razorpay } from "./Razorpay.js";

import { PayPalPaymentAdapter } from "./PayPalPaymentAdapter.js";
import { StripePaymentAdapter } from "./StripePaymentAdapter.js";
import { RazorPaymentAdapter } from "./RazorPaymentAdapter.js";

import { PaymentGatewayRegistry } from "./PaymentGatewayRegistry.js";

// Create adapters
const paypalAdapter = new PayPalPaymentAdapter(new PayPal());
const stripeAdapter = new StripePaymentAdapter(new Stripe());
const razorpayAdapter = new RazorPaymentAdapter(new Razorpay());

// Register in registry
const registry = new PaymentGatewayRegistry();
registry.register("PayPal", paypalAdapter);
registry.register("Stripe", stripeAdapter);
registry.register("Razorpay", razorpayAdapter);

registry.listGateways();

// Checkout function
function checkout(gatewayName: string, amount: number) {
  const processor = registry.getProcessor(gatewayName);
  processor.pay(amount);
}

// Run sample
checkout("PayPal", 100);
checkout("Stripe", 200);
checkout("Razorpay", 300);
