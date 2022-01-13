import DefaultFreight from '../../src/entities/DefaultFreight';
import Product from '../../src/entities/Product';

describe('Calculadora de frete', () => {
  it('Deve retornar o valor 0 caso o produto nao possua valores nas dimensões', () => {
    const camera = new Product('Camera', 1000);
    const freight = new DefaultFreight();
    expect(freight.calculator(camera)).toEqual(0);
  });

  it('Deve calcular o valor do frete com base nas dimensões e o peso do produto', () => {
    const camera = new Product('Camera', 1000, 20, 15, 10, 1);
    const guitarra = new Product('guitarra', 1000, 100, 30, 10, 3);
    const geladeira = new Product('geladeira', 1000, 200, 100, 50, 40);

    const freight = new DefaultFreight();
    expect(freight.calculator(camera)).toEqual(10);
    expect(freight.calculator(guitarra)).toEqual(30);
    expect(freight.calculator(geladeira)).toEqual(400);
  });

  it('Deve retornar o preço mínimo de frete caso ele seja superior ao valor calculado', () => {
    const camera = new Product('Camera', 1000, 20, 15, 10, 1);
    const freight = new DefaultFreight();
    expect(freight.calculator(camera)).toEqual(10);
  });
});
