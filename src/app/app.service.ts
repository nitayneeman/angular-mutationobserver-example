import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class AppService {
  fetchData(): Rx.Observable<string> {
    return Rx.Observable
      .of('Todo')
      .delay(1000);
  }
}
