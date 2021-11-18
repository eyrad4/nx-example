import { Component } from '@angular/core';
import { CounterService } from '@scaleo-nx2/shared/counter';

@Component({
  selector: 'scaleo-nx2-manager-entry',
  template: `<div class="remote-entry">
    <h2>manager's Remote Entry Component manager {{ counter$ | async }}</h2>
  </div>`,
  styles: [
    `
      .remote-entry {
        background-color: #143055;
        color: white;
        padding: 5px;
      }
    `,
  ],
})
export class RemoteEntryComponent {

  counter$ = this.counterService.counter$;

  constructor(private counterService: CounterService) {

  }
}
