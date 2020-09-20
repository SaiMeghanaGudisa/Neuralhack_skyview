import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  { path: '', component: VehicleComponent},
  { path: 'addvehicle', component: AddvehicleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
