import Cart from '../../src/entities/Cart';
import Item from '../../src/entities/Item';
import Product from '../../src/entities/Product';

describe('Carrinho', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('Deve adicionar um produto no carrinho', () => {
    const product1 = new Product('Short azul', 1000);
    const item = new Item(product1, 1);
    cart.addItemInCart(item);

    expect(cart.getCartDetails().items.length).toEqual(1);
  });

  it('Deve mostrar os dados do carrinho', () => {
    const product1 = new Product('Short azul', 1000);
    const item = new Item(product1, 1);

    cart.addItemInCart(item);

    expect(cart.getCartDetails()).toEqual({
      items: [
        {
          product: {
            description: 'Short azul',
            price: 1000,
            weight: 0,
            length: 0,
            width: 0,
            height: 0,
          },
          quantity: 1,
        },
      ],
      totalPrice: 1000,
    });
  });
});
