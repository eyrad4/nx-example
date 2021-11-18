import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private _counter$ = new BehaviorSubject<number>(0);

  set counter(value: number) {
    this._counter$.next(value);
  }

  get counter(): number {
    return this._counter$.value;
  }

  get counter$(): Observable<number> {
    return this._counter$;
  }
}
