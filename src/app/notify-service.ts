import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NotifyService {
  readonly items$ = new BehaviorSubject<ReadonlyArray<string>>([]);

  constructor() {
    this.log('NotifyService constructor');
  }

  public log(message: string): void {
    const textMessage = `[${new Date().toLocaleTimeString()}]: ${message}`;
    this.items$.next([...this.items$.value, textMessage]);
  }
}
