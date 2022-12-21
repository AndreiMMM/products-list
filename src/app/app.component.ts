// Core
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent
{
  title = 'Products App';

  constructor(private readonly router: Router) {
    this.router.navigate(['./products']);
  }
}
