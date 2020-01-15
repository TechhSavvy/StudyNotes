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

export class User {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
      this.name = name;
      this.email = email;
      this.age = age;

      console.log(`User Created: ${this.name}`)
  }   
}

let admin = new User("Tech Savvy", "tooensure@gmail.com", 22);
