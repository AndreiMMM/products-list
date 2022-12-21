// Core
import { ChangeDetectionStrategy, Component } from '@angular/core';
// Services
import { ProductsFacadeService } from '../../services/products-facade.service';

@Component({
  selector: 'app-resolvers-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsPageComponent {
  public products$ = this.productsFacadeService.products$;
  public loading$ = this.productsFacadeService.loading$;

  constructor(public readonly productsFacadeService: ProductsFacadeService) {}
}
