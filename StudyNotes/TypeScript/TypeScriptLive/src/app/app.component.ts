import { Component } from '@angular/core';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TypeScriptLive';
  
}
/*
let showToDo = (todo: {title: string, text: string}) => {
  console.log(todo.title+ ': '+ todo.text);
}

let myTodo = {title: "Trash", text: 'take out trash'}

showToDo(myTodo);

*/

// interface Todo {
//   title: string;
//   text: string;
// }



// let showToDo = (todo: Todo) => {
//   console.log(todo.title+ ': '+ todo.text);
// }

// let myTodo = {title: "Trash", text: 'take out trash'}

// showToDo(myTodo);

interface UserInterface{
  name: string;
  email: string;
  age: number;
  register();
  payInvoice();
}

class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`User Created: ${this.name}`)
  }

  register() {
    console.log(`${this.name} is now registered`);
  }

  payInvoice(){
    console.log(`${this.name} payed invoice`)
  }

}

class Member extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice()
  }

}

let john = new User("Tech Savvy", "tooensure@gmail.com", 22)

// john.register()


let mike: User = new Member(1, 'Mike Smith', 'tooensure@gmail.com', 22)
john.payInvoice();