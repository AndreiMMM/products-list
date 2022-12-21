// Core
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
// Models
import { IProductsModel } from '../../models/products.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
  @Input() public products: IProductsModel[] | null = null;
}
