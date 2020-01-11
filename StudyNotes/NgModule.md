* * * * * * * * * * * * * Ng Module

* import { NgModule } from '@angular/core';

*PURPOSE*

Helps organize the complex relationship between views, such as Components and Directives to data providers such as Services and Guards.

It works by allowing you to define all these relationships within a single file, rather then individually in every Component, Service. Which was the modo in the early days in Angular 2.

*MetaData Terms*

First we have Declarations whitch is where we would put any component, directive or pip any it'll be privately avalible to that module.

(IMG)
1. Declarations: [
    2. Component
    3. Directive
    4. pipe
]

If you need it to be publicly advalible to other modules then it'll need to be added to the exports section

(IMG)
1. exports: [
    2. PublicComponent
    3. PublicDirective
    4. Publicpipe
]   

components will be private by default and become public if added to exports.

Other modules gain access to exported components by importing that module in there own MetaData

*bootstrap*

Defines a component that used to initonally load the application by default this will be the app component witch is created automatcally the angular cli

(IMG)
1. boostrap: [
    2. RootComponent
]  


*PROVIDERS*


(IMG)
1. providers: [
    2. Service,
    3. Guard
]

This is where data providers can be registered such as services and guards, that can be injected into components within this module.
The injectable class will be avilble to any component in this module as well as any module that imports it






*NgModules* or simply TypeScript classes decorated with the NgModule 
* * * 

