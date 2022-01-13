export default class Product {
  constructor(
    readonly description: string,
    readonly price: number,
    readonly height = 0,
    readonly width = 0,
    readonly length = 0,
    readonly weight = 0
  ) {}

  getVolume() {
    return (this.width / 100) * (this.height / 100) * (this.length / 100);
  }

  getDensity() {
    return parseInt((this.weight / this.getVolume()).toFixed(0));
  }

  getDetails() {
    return {
      description: this.description,
      price: this.price,
      weight: this.weight,
      width: this.width,
      height: this.height,
      length: this.length,
    };
  }
}
