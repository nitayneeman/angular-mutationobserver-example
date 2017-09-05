import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class AppService {
  /**
   * Function that demonstrates an async action
   * @returns {Observable<any>}
   */
  fetchData(): Rx.Observable<any> {
    return Rx.Observable
      .of({})
      .delay(1000);
  }
}
