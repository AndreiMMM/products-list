// Core
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
// Services
import { ProductsFormService } from '../../services/products-form.service';

@Component({
  selector: 'app-products-pagination',
  templateUrl: './products-pagination.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPaginationComponent {
  @Input() totalCount = 0;
  @Input() productsPaginationForm: FormGroup | undefined;

  constructor(public readonly productsFormService: ProductsFormService) {}
}
