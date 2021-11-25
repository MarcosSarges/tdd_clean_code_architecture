import cpfValidator from './utils/cpf/cpfValidator';

export default class Order {
  private cpf: string | null = null;
  private products: any[] = [];
  private discount: number = 1;

  setupUser(cpf: string) {
    this.cpf = cpf;
  }

  addItemInCart(product: any) {
    this.products.push(product);
  }

  addCupom(cupom: string) {
    if (cupom === 'OFF50') {
      this.discount = 0.5;
    }
  }

  checkout() {
    if (!cpfValidator(this.cpf)) throw new Error('CPF INVALID');

    return {
      products: this.products,
      priceTotal:
        this.products.reduce(
          (prev, current) => (prev += current.price * current.quantity),
          0
        ) * this.discount,
      ordered: true,
    };
  }
}
