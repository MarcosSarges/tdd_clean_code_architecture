import Item from './Item';
export default class Cart {
  private items: Item[] = [];

  private calculatorTotalCart() {
    return this.items.reduce(
      (prev, current) =>
        (prev += current.product.getDetails().price * current.quantity),
      0
    );
  }

  addItemInCart(item: Item) {
    this.items.push(item);
  }

  getCartDetails() {
    return {
      items: this.items,
      totalPrice: this.calculatorTotalCart(),
    };
  }
}
