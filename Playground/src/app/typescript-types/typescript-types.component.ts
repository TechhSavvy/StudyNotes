import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-typescript-types',
  templateUrl: './typescript-types.component.html',
  styleUrls: ['./typescript-types.component.scss']
})
export class TypescriptTypesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// VALUE TYPES
// let myString: string;
// let myNumber: number;
// let myBoolean: any;
// let myArr: string[];
// let numArr: Array<number>;

// let strNumTuple: [string, number, number];

// myString = "Hello World".slice(0, 3);
// myNumber = 22;
// myBoolean = [true, false, "Tech Savvy", 22];
// myArr = ["Saterday", "Sunday"];
// numArr = [1,2,3,4]

// strNumTuple = ["Tech Savvy", 22, 22, ]

// let myVoid: void;
// let myNull: null;
// let myUndefined: undefined;

// myVoid = undefined;
// myNull = undefined;
// myUndefined = undefined;
