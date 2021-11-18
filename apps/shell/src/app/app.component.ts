import { Component } from '@angular/core';
import { CounterService } from '@scaleo-nx2/shared/counter';

@Component({
  selector: 'scaleo-nx2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  counter$ = this.counterService.counter$;
  
  constructor(
    private counterService: CounterService
  ) {}

  append(): void {
    this.counterService.counter = this.counterService.counter + 1;
  }
}
