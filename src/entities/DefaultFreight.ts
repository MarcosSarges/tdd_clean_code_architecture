import IFreightCalculator from './IFreightCalculator';
import Product from './Product';

export default class DefaultFreight implements IFreightCalculator {
  calculator(product: Product): number {
    if (!product.width || !product.height || !product.length || !product.weight)
      return 0;

    const freight = 1000 * product.getVolume() * (product.getDensity() / 100);
    const minFreight = 10;
    return Math.max(minFreight, freight);
  }
}
