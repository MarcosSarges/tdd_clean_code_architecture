import Cart from '../Cart';
import Cupom from '../Cupom';
import Product from '../Product';

describe('Cupom', () => {
  it('Deve retornar o valor de desconto dado um codigo valido', () => {
    const cupom = new Cupom('OFF50');
    expect(cupom.discountPercentage).toBe(0.5);
  });
  it('Deve retornar o valor 0 dado um codigo invalido', () => {
    const cupom = new Cupom('OFF10');
    expect(cupom.discountPercentage).toBe(0);
  });
  it('Deve retornar o valor do carrinho com desconto de 0.5', () => {
    const cupom = new Cupom('OFF50');
    const cart = new Cart();
    const product = new Product('Short azul', 1000);

    cart.addProduct(product, 1);

    expect(cupom.applyDiscount(cart)).toBe(500);
  });
});
