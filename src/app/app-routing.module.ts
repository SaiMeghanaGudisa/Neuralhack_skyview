import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { UpdatevehicleComponent } from './updatevehicle/updatevehicle.component';


const routes: Routes = [
  { path: 'list', component: VehicleComponent},
  { path: '', component: VehicleComponent},
  { path: 'addvehicle', component: AddvehicleComponent },
  { path: 'update-vehicle/:id', component: UpdatevehicleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
