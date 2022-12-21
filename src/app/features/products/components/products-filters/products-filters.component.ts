// Core
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Models
import { ProductCategoryEnum } from '../../models/product-category.enum';

@Component({
  selector: 'app-products-filters',
  templateUrl: './products-filters.component.html',
  styleUrls: ['./products-filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsFiltersComponent {
  @Input() productsFilterForm: FormGroup | undefined;
  public productCategory = Object.keys(ProductCategoryEnum);
}
