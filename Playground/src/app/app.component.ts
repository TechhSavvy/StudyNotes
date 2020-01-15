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
  register() {
    console.log(`${this.name} is now registered`)
  }

  payInvoice() {
    console.log(`${this.name} has paid invoce`)
  }
}

class Memeber extends User {
  id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age)
  }

  payInvoice() {
    super.payInvoice();
  }
}

let admin: User = new Memeber(1, "Tech Savvy", "tooensure@gmil.com", 22)

admin.payInvoice();