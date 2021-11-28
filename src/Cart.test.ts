import Cart from './Cart';
import Product from './Product';

describe('Carrinho', () => {
  let cart: Cart;

  beforeEach(() => {
    cart = new Cart();
  });

  it('Deve adicionar um produto no carrinho', () => {
    const product1 = new Product('Short azul', 1000);

    cart.addProduct(product1, 1);

    expect(cart.getCartDetails.items.length).toEqual(1);
  });

  it('Deve mostrar os dados do carrinho', () => {
    const product1 = new Product('Short azul', 1000);

    cart.addProduct(product1, 1);

    expect(cart.getCartDetails).toEqual({
      items: [
        {
          product: {
            description: 'Short azul',
            price: 1000,
          },
          quantity: 1,
        },
      ],
      totalPrice: 1000,
    });
  });
});
