import { addDays } from 'date-fns';
import Cart from './Cart';

export default class Cupom {
  private discount: number = 0;
  private expiredDate: Date;

  constructor(code: string, expiredDate = addDays(new Date(), 1)) {
    this.expiredDate = expiredDate;

    if (code === 'OFF50' && this.validatorExpireDate()) {
      this.discount = 0.5;
    }
  }

  private validatorExpireDate() {
    const dateTimeExpired = this.expiredDate.getTime();
    const dateTimeCurrent = new Date().getTime();
    return dateTimeExpired - dateTimeCurrent > 0 ? true : false;
  }

  getDiscountPercentage() {
    return this.discount;
  }

  applyDiscount(cart: Cart) {
    return cart.getCartDetails().totalPrice * (1 - this.discount);
  }
}
