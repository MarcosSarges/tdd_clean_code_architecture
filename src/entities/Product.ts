export default class Product {
  private description: string;
  private price: number;

  constructor(description: string, price: number) {
    this.description = description;
    this.price = price;
  }

  get details() {
    return {
      description: this.description,
      price: this.price,
    };
  }
}
