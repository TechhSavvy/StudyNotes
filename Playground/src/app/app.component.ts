import { Component } from '@angular/core';
// import { Todo } from './show-to-do';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Playground';
}

export interface Todo {
  title: string;
  text: string;
}

function showToDo(todo: Todo) {

  console.log(`${todo.title}: ${todo.text}`)
}

let myTodo = {title: "trash", text: "Take out trash bro"}

showToDo(myTodo);
