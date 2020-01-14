import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FunctionsComponent } from './functions/functions.component';
import { TypescriptTypesComponent } from './typescript-types/typescript-types.component';

@NgModule({
  declarations: [
    AppComponent,
    FunctionsComponent,
    TypescriptTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
