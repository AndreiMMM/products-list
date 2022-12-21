import { Pipe, PipeTransform } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Pipe({
  name: 'titleCaseEnum',
})
export class TitleCaseEnumPipe implements PipeTransform {
  private readonly titleCasePipe: TitleCasePipe;

  constructor() {
    this.titleCasePipe = new TitleCasePipe();
  }

  public transform(value: string, replaceChar = '_'): string {
    if (value) {
      const newStr = value.replaceAll(replaceChar, ' ');
      return this.titleCasePipe.transform(newStr);
    }

    return '';
  }
}
