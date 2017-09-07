import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: any[];

  constructor(private appService: AppService) {
    this.todos = [{ id: 0 }, { id: 1 }, { id: 2 }];
  }

  /**
   * Function that invokes an async action
   */
  addTodo(): void {
    this.appService
      .fetchData()
      .subscribe(() => {
        const lastTodo = this.todos[this.todos.length - 1];

        this.todos.push({ id: lastTodo.id + 1 });
      });
  }

  removeTodo(id: number): void {
    this.todos.splice(id, 1);
  }

  onDomChange($event: Event) {
    console.log($event);
  }
}
