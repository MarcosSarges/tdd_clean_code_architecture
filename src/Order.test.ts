// 1 - Não deve fazer um pedido com cpf inválido
// 2 - Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)
// 3 - Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)

import Cart from './Cart';
import Cupom from './Cupom';
import Order from './Order';
import Product from './Product';
import User from './User';

describe('Order', () => {
  let order: Order;

  beforeEach(() => {
    order = new Order();
  });

  it('Não deve fazer um pedido com cpf inválido', () => {
    const cpf = '553.566.310-55';

    expect(() => {
      const user = new User(cpf);
      const cart = new Cart();
      order.checkout(cart, user);
    }).toThrowError('CPF INVALID');
  });
  it('Deve fazer um pedido com cpf válido', () => {
    const user = new User('553.566.310-73');
    const cart = new Cart();
    const product = new Product('Short azul', 1000);

    cart.addProduct(product, 1);
    expect(order.checkout(cart, user)).toMatchSnapshot();
  });

  it('Deve fazer um pedido com 3 itens (com descrição, preço e quantidade) ', () => {
    const user = new User('553.566.310-73');
    const cart = new Cart();
    const product1 = new Product('Short azul', 1000);
    const product2 = new Product('Short rosa', 1000);
    const product3 = new Product('Short vermelho', 1000);

    cart.addProduct(product1, 2);
    cart.addProduct(product2, 2);
    cart.addProduct(product3, 2);

    expect(order.checkout(cart, user).status === 'DONE').toMatchSnapshot();
  });
  it('Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)', () => {
    const user = new User('553.566.310-73');
    const cart = new Cart();
    const cupom = new Cupom('OFF50');
    const product1 = new Product('Short azul', 1000);
    const product2 = new Product('Short rosa', 1000);
    const product3 = new Product('Short vermelho', 1000);

    cart.addProduct(product1, 2);
    cart.addProduct(product2, 2);
    cart.addProduct(product3, 2);

    expect(order.checkout(cart, user, cupom).paymentTotal).toEqual(3000);
  });
});
