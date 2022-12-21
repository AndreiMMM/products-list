import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProductsModel } from '../models/products.model';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsApiService {
  private readonly path = '/assets';

  constructor(private readonly http: HttpClient) {}

  public getProducts(query: string): Observable<IProductsModel[]> {
    return this.http
      .get<IProductsModel[]>(`${this.path}/products.json` + query)
      .pipe(delay(2000));
  }
}
