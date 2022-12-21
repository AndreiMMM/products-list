// Core
import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Components
import * as featuresComponents from './features/public.features';
// Modules
import { ProductsModule } from './modules/products-module/products/products.module';
// Resolvers
import { ProductsResolver } from './features/products/resolvers/products.resolver';

const routes: Routes = [
  {
    path: '',
    component: featuresComponents.LayoutPageComponent,
    children: [
      {
        path: 'products',
        loadChildren: (): Promise<Type<ProductsModule>> =>
          import('./modules/products-module/products/products.module').then(
            (m) => m.ProductsModule
          ),
        resolve: {
          products: ProductsResolver,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
