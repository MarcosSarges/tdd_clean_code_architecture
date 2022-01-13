import Item from '../../src/entities/Item';
import Product from '../../src/entities/Product';

describe('Item', () => {
  it('Deve criar um item com 1 de quantidade', () => {
    const product1 = new Product('Short azul', 1000, 1, 2, 3, 4);
    const item = new Item(product1, 1);

    expect(item.quantity).toEqual(1);
    expect(item.product).toBeInstanceOf(Product);
  });
});
