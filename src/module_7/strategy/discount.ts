// discount.ts
interface DiscountStrategy {
  calculate(price: number): number;
}

export class NoDiscount implements DiscountStrategy {
  calculate(price: number) { return price; }
}

export class TenPercentDiscount implements DiscountStrategy {
  calculate(price: number) { return price * 0.9; }
}

export class ShoppingCart {
  private strategy: DiscountStrategy;
  constructor(strategy: DiscountStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: DiscountStrategy) {
    this.strategy = strategy;
  }

  checkout(price: number) {
    console.log("Precio final:", this.strategy.calculate(price));
  }
}

