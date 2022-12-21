// Core
import { Injectable } from '@angular/core';
import {
  FormControl,
  FormGroup,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
// Material
import { PageEvent } from '@angular/material/paginator';
// Models
import { ProductCategoryEnum } from '../models/product-category.enum';
import { ProductsOrderingModel } from '../models/products-ordering.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsFormService {
  constructor() {}

  public filtersForm: UntypedFormGroup | undefined;
  public sortingForm: UntypedFormGroup | undefined;
  public paginationForm: UntypedFormGroup | undefined;

  public initForms(): void {
    this.initFiltersForm();
    this.initSortingForm();
    this.initPaginationForm();
  }

  public setFormsDefault(): void {
    this.setFiltersDefault();
    this.setSortingDefault();
    this.setPaginationDefault();
  }

  private initFiltersForm(): void {
    this.filtersForm = new FormGroup({
      searchTerm: new FormControl('', Validators.maxLength(50)),
      category: new FormControl(),
      min: new FormControl(0),
      validatorMin: new FormControl(0),
      max: new FormControl(0),
      validatorMax: new FormControl(0),
    });
  }

  private setFiltersDefault(): void {
    this.filtersForm?.setValue(
      {
        searchTerm: '',
        category: ProductCategoryEnum.DANCE,
        min: 0,
        validatorMin: 0,
        validatorMax: 0,
        max: 0,
      },
    );
  }

  private initSortingForm() {
    this.sortingForm = new FormGroup({
      sortBy: new FormControl(''),
    });
  }

  private setSortingDefault(): void {
    this.sortingForm?.setValue(
      {
        sortBy: ProductsOrderingModel.NEWEST_UPLOAD_DATE,
      },
      { emitEvent: false }
    );
  }

  private initPaginationForm() {
    this.paginationForm = new FormGroup({
      take: new FormControl(0, [Validators.min(0), Validators.max(100)]),
      offset: new FormControl(0, [Validators.min(0), Validators.max(20)]),
    });
  }

  private setPaginationDefault(): void {
    this.paginationForm?.setValue(
      {
        take: 0,
        offset: 20,
      },
      { emitEvent: false }
    );
  }

  public updatePagination(pagination: PageEvent): void {
    this.paginationForm?.setValue({
      take: pagination.pageSize,
      offset: pagination.pageIndex * pagination.pageSize,
    });
  }
}
