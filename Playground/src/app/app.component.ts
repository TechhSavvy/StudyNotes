import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Playground';
}

let myString: string;
let myNumber: number;
let myBoolean: any;

myString = "Hello World".slice(0, 3);
myNumber = 22;
myBoolean = [true, false, "Tech Savvy", 22];

console.log(myString)
