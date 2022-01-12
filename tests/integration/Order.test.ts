import Cart from '../../src/entities/Cart';
import Cupom from '../../src/entities/Cupom';
import Item from '../../src/entities/Item';
import Order from '../../src/entities/Order';
import Product from '../../src/entities/Product';
import User from '../../src/entities/User';

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
    const item1 = new Item(product, 1);

    cart.addItemInCart(item1);
    expect(order.checkout(cart, user)).toMatchSnapshot();
  });

  it('Deve fazer um pedido com 3 itens (com descrição, preço e quantidade) ', () => {
    const user = new User('553.566.310-73');
    const cart = new Cart();
    const product1 = new Product('Short azul', 1000);
    const product2 = new Product('Short rosa', 1000);
    const product3 = new Product('Short vermelho', 1000);

    const item1 = new Item(product1, 2);
    const item2 = new Item(product2, 2);
    const item3 = new Item(product3, 2);
    cart.addItemInCart(item1);
    cart.addItemInCart(item2);
    cart.addItemInCart(item3);

    expect(order.checkout(cart, user).status === 'DONE').toMatchSnapshot();
  });
  it('Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)', () => {
    const user = new User('553.566.310-73');
    const cart = new Cart();
    const cupom = new Cupom('OFF50');
    const product1 = new Product('Short azul', 1000);
    const product2 = new Product('Short rosa', 1000);
    const product3 = new Product('Short vermelho', 1000);

    const item1 = new Item(product1, 2);
    const item2 = new Item(product2, 2);
    const item3 = new Item(product3, 2);
    cart.addItemInCart(item1);
    cart.addItemInCart(item2);
    cart.addItemInCart(item3);

    expect(order.checkout(cart, user, cupom).paymentTotal).toEqual(3000);
  });

  it('Não deve aplicar cupom de desconto expirado', () => {
    const user = new User('553.566.310-73');
    const cart = new Cart();
    // const cupom = new Cupom('OFF50');
    const product = new Product('Short azul', 1000);
    const item = new Item(product, 1);
    cart.addItemInCart(item);
    expect(order.checkout(cart, user).paymentTotal).toEqual(1000);
  });
  it.todo(
    'Deve calcular o valor do frete com base nas dimensões (altura, largura e profundidade em cm) e o peso dos produtos (em kg)'
  );
  it.todo(
    'Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado'
  );
});
