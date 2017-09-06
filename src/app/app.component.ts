import { Component, ElementRef, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public nodes: any[];

  constructor(private appService: AppService,
              private elementRef: ElementRef) {
    this.nodes = [{}, {}, {}];
  }

  ngOnInit(): void {
    const list = this.elementRef.nativeElement.querySelector('ul');
    const changes = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => console.log(mutation));
    });

    changes.observe(list, { childList: true });
  }

  /**
   * Function that invokes an async action
   */
  addNode(): void {
    this.appService
      .fetchData()
      .subscribe(() => this.nodes.push({}));
  }

  removeNode(index: number): void {
    this.nodes.splice(index, 1);
  }
}
