import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos: string[];

  constructor(private appService: AppService) {
    this.todos = ['Todo', 'Todo', 'Todo'];
  }

  addTodo(): void {
    this.appService
      .fetchData()
      .subscribe((todo: string) => this.todos.push(todo));
  }

  removeTodo(index: number): void {
    this.todos.splice(index, 1);
  }

  onDomChange($event: Event) {
    console.log($event);
  }
}
