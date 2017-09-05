import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public nodes: any[];

  constructor(private appService: AppService) {
    this.nodes = [{}, {}, {}];
  }

  /**
   * Function that invokes an async action
   */
  addNode(): void {
    this.appService
      .fetchData()
      .subscribe(() => this.nodes.push({}));
  }
}
