import Product from '../Product';

describe('Produtos', () => {
  it('Deve criar uma instancia de produto', () => {
    const product = new Product('Short azul', 1000);

    expect(product).toBeInstanceOf(Product);
  });
  it('Deve retornar os dados do produto criado', () => {
    const product = new Product('Short azul', 1000);

    expect(product.details).toEqual({
      description: 'Short azul',
      price: 1000,
    });
  });
});
