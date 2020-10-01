import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { VehicleComponent } from './vehicle/vehicle.component';
// import { MyVehiclesComponent } from './my-vehicles/my-vehicles.component';
// import { VehiclesListComponent } from './vehicles-list/vehicles-list.component';
import { UpdatevehicleComponent } from './updatevehicle/updatevehicle.component';

const routes: Routes = [
  { path: 'list', component: VehicleComponent},
  { path: 'addvehicle', component: AddvehicleComponent },
  // { path: 'myvehicles', component: MyVehiclesComponent},
  { path: 'update-vehicle/:id', component: UpdatevehicleComponent}
  //{ path: 'vehicleslist', component: VehiclesListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
