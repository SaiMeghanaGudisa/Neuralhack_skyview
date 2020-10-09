import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { UpdatevehicleComponent } from './updatevehicle/updatevehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    AddvehicleComponent,
    UpdatevehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
