import { ProductCategoryEnum } from './product-category.enum';
import { IFilterModel } from '../../../shared/api-models';

export interface IProductFilterModel extends IFilterModel {
  category: ProductCategoryEnum;
  min: number;
  max: number;
}
