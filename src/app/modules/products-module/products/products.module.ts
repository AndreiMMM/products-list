// Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
// Modules
import { MaterialModule } from '../../material/material.module';
import { SharedModule } from '../../shared/shared.module';
// Components
import * as pc from '../../../features/products/public.products';

const routes: Routes = [
  // Products list page
  { path: '', component: pc.ProductsPageComponent },
];

const productsComponents = [
  pc.ProductsPageComponent,
  pc.ProductsListComponent,
  pc.ProductsFiltersComponent,
  pc.ProductsSortingComponent,
  pc.ProductsPaginationComponent,
];

@NgModule({
  declarations: [productsComponents],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  exports: [RouterModule],
})
export class ProductsModule {}
