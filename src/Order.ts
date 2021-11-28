import Cart from './Cart';
import Cupom from './Cupom';
import User from './User';

export default class Order {
  checkout(cart: Cart, user: User, cupom?: Cupom) {
    const paymentTotal = cupom
      ? cupom?.applyDiscount(cart)
      : cart.getCartDetails.totalPrice;

    return {
      user: user.userInfos,
      status: 'DONE',
      items: cart.getCartDetails.items,
      paymentTotal,
    };
  }
}
