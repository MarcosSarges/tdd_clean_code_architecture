import Product from './Product';

export default interface IFreightCalculator {
  calculator(product: Product): number;
}
