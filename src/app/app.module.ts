import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Mockup1Component } from './mockup1/mockup1.component';


@NgModule({
    declarations: [
  
    ],
    imports: [
      AppComponent,
      FormsModule,
      Mockup1Component
      
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }