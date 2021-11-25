// 1 - Não deve fazer um pedido com cpf inválido
// 2 - Deve fazer um pedido com 3 itens (com descrição, preço e quantidade)

import Order from './Order';

const ITEM = {
  description: 'Shot Azul',
  price: 1000,
  quantity: 1,
};

// 3 - Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)
describe('Order', () => {
  let order: Order;

  beforeEach(() => {
    order = new Order();
  });

  it('Não deve fazer um pedido com cpf inválido', () => {
    const cpf = '553.566.310-55';
    order.setupUser(cpf);

    expect(() => {
      order.checkout();
    }).toThrowError('CPF INVALID');
  });
  it('Deve fazer um pedido com cpf válido', () => {
    const cpf = '553.566.310-73';
    order.setupUser(cpf);
    order.addItemInCart(ITEM);

    expect(order.checkout()).toMatchSnapshot();
  });

  it('Deve fazer um pedido com 3 itens (com descrição, preço e quantidade) ', () => {
    order.setupUser('553.566.310-73');

    order.addItemInCart(ITEM);
    order.addItemInCart(ITEM);
    order.addItemInCart(ITEM);

    expect(order.checkout()).toMatchSnapshot();
  });
  it('Deve fazer um pedido com cupom de desconto (percentual sobre o total do pedido)', () => {
    order.setupUser('553.566.310-73');
    order.addItemInCart(ITEM);
    order.addCupom('OFF50');

    expect(order.checkout().priceTotal).toEqual(500);
  });
  it('Não deve aplicar desconto caso o cupom seja invalido', () => {
    order.setupUser('553.566.310-73');
    order.addItemInCart(ITEM);
    order.addCupom('OFF10');

    expect(order.checkout().priceTotal).toEqual(1000);
  });
});
