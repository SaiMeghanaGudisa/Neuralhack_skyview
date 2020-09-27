import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { MyVehiclesComponent } from './my-vehicles/my-vehicles.component';
import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';

const routes: Routes = [
  { path: '', component: VehicleComponent},
  { path: 'addvehicle', component: AddvehicleComponent },
  { path: 'myvehicles', component: MyVehiclesComponent},
  { path: 'vehicleslist', component: VehiclesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
