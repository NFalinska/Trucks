import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TrucksComponent } from './trucks/trucks.component'



import {TruckEditComponent} from "./trucks/truck-edit/truck-edit.component";
import {TrucksService} from "./trucks/trucks.service";



@NgModule({
  declarations: [
    AppComponent,
    TrucksComponent,
    TruckEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [TrucksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
