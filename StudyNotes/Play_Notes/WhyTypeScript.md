# Why TypeScript

Any valid JavaScript code is also valid typeScript code.

Although TypeScript has

* Additional Features that do not exist in current edition of JavaScript supported by most browswers

## What Does TypeScript Offer

#### Static Typing

Here are the Types we use in TypeScript:


| TypeScript Types | Description |
| :--------------: | :---------- |
| `String` | A string can be any text inside double or single quotes |
| `Number` | The original examples are the natural numbers 1, 2, 3, 4, and so forth |
| `Boolean` | True or False values
| `Array` | special type of data type which can store multiple values of different data types|


On a more advance or not so common level we have: 

| TypeScript Types | Description |
| :--------------: | :---------- |
| `Any` | Can be any of TypeScript Types |
| `Void` | No TypeScript Types returned |
| `Null` | Nothing or Undefined |
| `Tuple` | A array with a fixed number of elements |
| `enum` | Emumerated values  |
| `Generics` | Little advance best described is best for reusable code|


By default JavaScript is a untyped language meaning we dont have to specify varibles or function types as in TypeScript Types.

* It is completely optional

* Helps us find and prevent bugs and stop future issues from happing

* Makes our code much more readable and descriptive

High level languages such as Java, even C requires you to specify your types, yet doing so has lots of advantages.

Although Static typing is optional when working with TypeScript, doing so makes our application more predictible and easier to debug, when things go wrong.

Although if you do assign a TypeScript Types to a varible, lets say ```example: string```, then later assign ```example = 1```, you'll get a error. Why, because obviouly be emaple will hold a string, and for you to place a number in it is incorrect. We now cought a quick bug.

##### Class Based Objects

If you had any expriance with PHP, Python or Java, you've probably worked with classes in Object oriented programing before.

Classes are a huge advantage in TypeScript, they gives us the abilty to use:

* Object Oriented programming in our JS applications
    - classes
    - Properties
    - Methods

* No more JS ProtoTypes based objects

* Provides use with Encapsulation
    - Keeps all resourses in one place and use it when needed.

* Inheritance
    - We can inherit classes
    - Have SubClasses

* Access Modifiers
    - public
    - private
    - protected


In standard JavaScript ES5 you has the solution to use prototypes, with is kinda confusing and annoying, Yet in ES6 we can use classes and typescript is fully compatable with ES6 as well.

#### Modularity

TypeScipt makes JavaScript more modular, having the ability to import other files and other modules and components.

#### ES6 Features

Even better, we get all the ES6 Features like arrow functions, we can use let and const for declaring variblies.

#### Syntax

Overall it gives us syntax closer to higher level languages like Java, or C.

Lets be serous, TypeScript brings lots of object oriented features that most have missed in JavaScript for a long time.

The concept of classes, interfacese, contructors, access modifiers like public and private, fileds, proprties, jenericks,etc.

TypeScript files need to be compiled because the browswe doesn't read typescript this is done with the 'Typescript Compiler' which is called tsc.

tsc pretty much takes the .ts files and compiles them down to .js files.

You can install tsc with npm, Just check out my ('this will be a link') article, trust me it's very easy.

## Let Get Started

| Next | ('https://help.github.com/en/github/writing-on-github/organizing-information-with-tables') |
| :---: | :--- |

