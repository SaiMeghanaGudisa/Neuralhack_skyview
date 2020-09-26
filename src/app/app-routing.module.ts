import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { MyVehiclesComponent } from './my-vehicles/my-vehicles.component';

const routes: Routes = [
  { path: '', component: VehicleComponent},
  { path: 'addvehicle', component: AddvehicleComponent },
  { path: 'myvehicles', component: MyVehiclesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
