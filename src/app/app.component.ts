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
    this.nodes = [{ id: 0 }, { id: 1 }, { id: 2 }];
  }

  /**
   * Function that invokes an async action
   */
  addNode(): void {
    this.appService
      .fetchData()
      .subscribe(() => {
        const lastNode = this.nodes[this.nodes.length - 1];

        this.nodes.push({ id: lastNode.id + 1 });
      });
  }

  removeNode(id: number): void {
    this.nodes.splice(id, 1);
  }

  onDomChange($event: Event) {
    console.log($event);
  }
}
