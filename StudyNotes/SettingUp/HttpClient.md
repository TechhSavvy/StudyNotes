url = 'https://www.youtube.com/watch?v=yAT2HHusDDk&lc=z222trubcmzcwnoyo04t1aokgwilcfiuwt2t1iekanebbk0h00410'

angular nav command = ng g @angular/material:material-nav --name=main-nav


* * Introduction

So im making this so that I'm able to get a better under standing of angular and its structure. Angular has alot of short cuts to creates files with auto derectives by default like classes, and imports, exports, etc.

This is defaintly a releaf, but anyways, but as you read, pretty much going to take a "no terminal use", well after the angular/cli project is install by the terminal.

But in regards to the efficiency of angular terminal commands' and the sack of acually following along and avoiding mistakes, I added how the folder/file structure path should look, added with the easyly angular terminal command line.

If I haven't stated a Angular command line then it's possible I wasn't aware of it, feel free to shoot me a email of the solution so that I'm aware of it.




1. Create A Model 

* > src/app/user.model.ts

* > ng generate class user


Create a file called user.module.ts .

This ts file is going to export a class.
Befor you write anything within this class block, 

take a peck back at our json-server/file.
Here we want to take notice of each "key": "vavlue" in witch we will assign its value a premative type

Back in our model.ts file within the User class block,
we will label each "key" exact as in json/server file.

Each key will hold its related primitive type

id: number", name: string, age: number, canWalk: boolean etc..


2. Create A Service

* > src/app/data.service.ts

* > ng generate service data

Now it's best to copy the URL from the json-server in witch you'll like to retrieve the data from.
My URL currently is http://localhost:5555/user yet that will not always be the case.

Befor we write some code inside our data.service file,we'll first want to locate to app.module within the imports block, and insert HttpClientModule.
Then we'll going to 
* import HttpClientModule from '@angular/common/http' at the top area along side other imports.

In our providers object array which is held within the NgModule method, along side the imports and declarations, etc..

We're going to want to insert our DataService.

Great now let's get back to the DataService.
Within our DataService class we going to want to declare the URL equal to the actualUrl.
Here I will set my 
> aUrl = 'http://localhost:5555/user';

Now within our constructor located in the DataService class block, we're going to call our 
* (private _http: HttpClient){}.
We'll also have to 
* import HttpClient from '@angular/common/http'
at top area.


Now under the constructor lets create our method for geting our users or whatever your retrieving from the server.

* getUsers(){}

This method block will return the current _http in which we're going to .get<>() method the User model Class that's a array with this.aUrl as a paramerter.

* return this._http.get<User[]> (this.aUrl)

Make sure to also import your User from its path,
other wise your get a error.

### Note ####
To check if there any errors, run command live
* ng serve 


Open the app.component.ts file and inside the AppComponent class block, remove title equal to whatever the defalut name is.

Beside class AppComponent and before its block, we'll need to insert implements OnInit.

* export class AppComponent implements OnInit {}

Also again don't forget to

* import { OnInit } from '@angular/core'

Within AppComponent block add

* constructor() {}

and

* ngOnInit() {}

Now above the constructor write a observable key of users$ with the value of our recently created class User with a array, witch will be imported at top area

* users$: User[];

In the constructor we'll going to want to privately call our dataService key with a value of our created DataService class.

Finially, in our ngOnInit method, inside the curly braceses/block we going to return this dataService getUsers method, we'll also need call the subscribe method in connection, holding a function with parameter of data and this user observible equal to data


### All Ready ###

Locate to the app.component.html file

* > src/app/app.component.html

Feel free to remove the unneeded existing code within it.

O.k now we create a div tag. Inside the div (NOT THE DIV TAG) we'll going to use our *ngFor
directive and set it equal to let temp value user of observible  users$

* < div *ngFor='let user of users$' > < /div >

Now inside the div tags create a h2 or whatever tag you feel best fits.

inside this created tag, lets say h2 we insert curly braces, in whitch we bind temp name to the class User key.













