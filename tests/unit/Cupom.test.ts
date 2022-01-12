import Cart from '../../src/entities/Cart';
import Cupom from '../../src/entities/Cupom';
import Item from '../../src/entities/Item';
import Product from '../../src/entities/Product';

describe('Cupom', () => {
  it('Deve retornar o valor de desconto dado um codigo valido', () => {
    const cupom = new Cupom('OFF50');
    expect(cupom.getDiscountPercentage()).toBe(0.5);
  });
  it('Deve retornar o valor 0 dado um codigo invalido', () => {
    const cupom = new Cupom('OFF10');
    expect(cupom.getDiscountPercentage()).toBe(0);
  });
  it('Deve retornar o valor do carrinho com desconto de 0.5', () => {
    const cupom = new Cupom('OFF50');
    const cart = new Cart();
    const product = new Product('Short azul', 1000);
    const item = new Item(product, 1);
    cart.addItemInCart(item);

    expect(cupom.applyDiscount(cart)).toBe(500);
  });
});
