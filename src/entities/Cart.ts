import Product from './Product';

interface Item {
  product: Product;
  quantity: number;
}

export default class Cart {
  private items: Item[] = [];

  private calculatorTotalCart() {
    return this.items.reduce(
      (prev, current) =>
        (prev += current.product.getDetails().price * current.quantity),
      0
    );
  }

  addProduct(product: Product, quantity: number) {
    this.items.push({ product, quantity });
  }

  getCartDetails() {
    return {
      items: this.items,
      totalPrice: this.calculatorTotalCart(),
    };
  }
}
