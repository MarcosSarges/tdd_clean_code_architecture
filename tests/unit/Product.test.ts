import Product from '../../src/entities/Product';
const PRICE = 1000;

describe('Produtos', () => {
  it('Deve criar uma instancia de produto', () => {
    const product = new Product('Short azul', 1000, 1, 1, 1, 1);

    expect(product).toBeInstanceOf(Product);
  });
  it('Deve retornar os dados do produto criado', () => {
    const product = new Product('Short azul', 1000, 1, 2, 3, 4);

    expect(product.getDetails()).toEqual({
      description: 'Short azul',
      price: 1000,
      weight: 4,
      width: 2,
      height: 1,
      length: 3,
    });
  });

  it('Deve calcular o volume do produto', () => {
    const camera = new Product('Camera', PRICE, 20, 15, 10);
    const guitarra = new Product('guitarra', PRICE, 100, 30, 10);
    const geladeira = new Product('geladeira', PRICE, 200, 100, 50);

    // Camera: 20cm x 15 cm x 10 cm = 0,003 m3
    // Guitarra: 100cm x 30cm x 10cm = 0,03 m3
    // Geladeira: 200cm x 100cm x 50cm = 1 m3
    expect(camera.getVolume()).toEqual(0.003);
    expect(guitarra.getVolume()).toEqual(0.03);
    expect(geladeira.getVolume()).toEqual(1);
  });

  it('Deve calcular a densidade do produto', () => {
    // Camera: 1kg / 0,003 m3 = 333kg/m3
    // Guitarra: 3kg / 0,03 m3 = 100kg/m3
    // Geladeira: 40kg / 1 m3 = 40kg/m3
    const camera = new Product('Camera', PRICE, 20, 15, 10, 1);
    const guitarra = new Product('guitarra', PRICE, 100, 30, 10, 3);
    const geladeira = new Product('geladeira', PRICE, 200, 100, 50, 40);

    expect(camera.getDensity()).toEqual(333);
    expect(guitarra.getDensity()).toEqual(100);
    expect(geladeira.getDensity()).toEqual(40);
  });
});
