import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleCaseEnumPipe } from '../../shared/core/pipes/title-case-enum.pipe';

@NgModule({
  declarations: [TitleCaseEnumPipe],
  imports: [CommonModule],
  exports: [TitleCaseEnumPipe],
})
export class SharedModule {}
