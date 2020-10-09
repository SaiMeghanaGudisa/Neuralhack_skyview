import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { AddvehicleComponent } from './all-vehicles-list/addvehicle/addvehicle.component';
import { VehicleComponent } from './all-vehicles-list/vehicle/vehicle.component';
import { UpdatevehicleComponent } from './all-vehicles-list/updatevehicle/updatevehicle.component';
import { AllVehiclesListComponent } from './all-vehicles-list/all-vehicles-list.component';

const routes: Routes = [
  { path: 'all-vehicles-list/list', component: VehicleComponent},
  // { path: '', component: VehicleComponent},
   {path: 'all-vehicles-list', component: AllVehiclesListComponent},
  { path: 'all-vehicles-list/addvehicle', component: AddvehicleComponent },
  { path: 'all-vehicles-list/update-vehicle/:id', component: UpdatevehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
