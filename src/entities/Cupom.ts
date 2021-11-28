import Cart from './Cart';

export default class Cupom {
  private discount: number = 0;

  constructor(code: string) {
    if (code === 'OFF50') {
      this.discount = 0.5;
    }
  }

  get discountPercentage() {
    return this.discount;
  }

  applyDiscount(cart: Cart) {
    return cart.getCartDetails.totalPrice * (1 - this.discount);
  }
}
