// Core
import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
// Rxjs
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  iif,
  map,
  merge,
  Observable,
  of,
  Subscription,
  switchMap,
  takeUntil,
  tap,
  withLatestFrom,
} from 'rxjs';
// Models
import { IProductsModel } from '../models/products.model';
import { IProductFilterModel } from '../models/products-filters.model';
import { ProductsOrderingModel } from '../models/products-ordering.model';
import { IPageModel } from '../../../shared/api-models';
// Services
import { ProductsApiService } from './products-api.service';
import { ProductsFormService } from './products-form.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsFacadeService {
  public loading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  public products$: BehaviorSubject<IProductsModel[]> = new BehaviorSubject<
    IProductsModel[]
  >([]);

  public readonly subscriptions: Subscription[] = [];

  constructor(
    private readonly productsApiService: ProductsApiService,
    public readonly productsFormService: ProductsFormService
  ) {}

  public onDestroy(): void {
    this.subscriptions.forEach((s) => {
      s.unsubscribe();
    });
  }

  public loadProducts(
    filters: IProductFilterModel,
    sorting: ProductsOrderingModel,
    pagination: IPageModel
  ): Observable<IProductsModel[]> {
    const query =
      `?searchTerm=${filters.searchTerm}&category=${filters.category}&min=${filters.min}&max=${filters.max}` +
      `&orderBy=${sorting}&take=${pagination.take}&offset=${pagination.offset}`;

    return this.productsApiService.getProducts(query);
  }

  public filtersListener(): void {
    if (
      !this.productsFormService.filtersForm ||
      !this.productsFormService.sortingForm ||
      !this.productsFormService.paginationForm
    ) {
      return;
    }
    const filters = this.productsFormService.filtersForm;
    const sorting = this.productsFormService.sortingForm;
    const pagination = this.productsFormService.paginationForm;

    const filtering = merge(
      filters.valueChanges,
      sorting.valueChanges,
      pagination.valueChanges
    );

    this.subscriptions.push(
      filtering
        .pipe(
          debounceTime(200),
          distinctUntilChanged(
            (prev, curr) => JSON.stringify(prev) === JSON.stringify(curr)
          ),
          tap(() => this.loading$.next(true)),
          switchMap((_) =>
            iif(
              () => filters.valid,
              this.loadProducts(
                filters.value as IProductFilterModel,
                sorting.value.sortBy,
                pagination.value
              ).pipe(takeUntil(filtering)),
              of([])
            )
          ),
          catchError(() => {
            return of([]);
          })
        )
        .subscribe((products) => {
          this.initMetaData(products);
          this.products$.next(products);
          this.loading$.next(false);
        })
    );
  }

  private initMetaData(products: IProductsModel[]): void {
    let min = products[0]?.price,
      max = products[0]?.price;

    products.forEach((product) => {
      if (product.price > max) {
        max = product.price;
      }
      if (product.price < min) {
        min = product.price;
      }
    });

    this.productsFormService.filtersForm?.setValidators([
      Validators.min(min),
      Validators.max(max),
    ]);
    this.productsFormService.filtersForm?.patchValue(
      {
        validatorMin: min,
        validatorMax: max,
      },
      { emitEvent: false }
    );
  }
}
