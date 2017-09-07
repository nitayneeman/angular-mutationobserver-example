import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class AppService {
  fetchData(): Rx.Observable<any> {
    return Rx.Observable
      .of('Todo')
      .delay(1000);
  }
}
