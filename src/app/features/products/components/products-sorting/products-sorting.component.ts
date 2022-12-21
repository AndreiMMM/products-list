// Core
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Models
import {ProductsOrderingModel} from "../../models/products-ordering.model";

@Component({
  selector: 'app-products-sorting',
  templateUrl: './products-sorting.component.html',
  styleUrls: ['./products-sorting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsSortingComponent {
  @Input() productsSortingForm: FormGroup | undefined;

  public productOrdering =  Object.keys(ProductsOrderingModel);
}
