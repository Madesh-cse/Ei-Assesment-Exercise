export class Stripe {
  sendPayment(amount: number) {
    console.log(`Stripe processed payment of $${amount}`);
  }
}