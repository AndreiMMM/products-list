import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsFacadeService } from '../services/products-facade.service';
import { IProductsModel } from '../models/products.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsResolver implements Resolve<IProductsModel[]> {
  constructor(private readonly productsFacadeService: ProductsFacadeService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IProductsModel[]> {
    this.productsFacadeService.productsFormService.initForms();

    this.productsFacadeService.filtersListener();

    this.productsFacadeService.productsFormService.setFormsDefault();

    return this.productsFacadeService.products$.asObservable();
  }
}
