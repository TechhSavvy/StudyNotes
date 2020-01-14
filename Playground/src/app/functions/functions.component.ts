import { Component, OnInit } from '@angular/core';
import { parse } from 'querystring';

@Component({
  selector: 'app-functions',
  templateUrl: './functions.component.html',
  styleUrls: ['./functions.component.scss']
})
export class FunctionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// function getSum(num1:any, num2:any):number {
//   if(typeof num1 === 'string') {
//     num1 = parseInt(num1)
//   }
//   if(typeof num2 === 'string') {
//     num2 = parseInt(num2)
//   }
//   return num1 + num2; 
// }

// console.log(getSum("5", 5))


function getName(firstName:string, lastName?:string):string {
  if(lastName === undefined) {
    return `${firstName}`
  } else {
    return `${firstName} ${lastName}`
  }
}

console.log(getName('Tech'))