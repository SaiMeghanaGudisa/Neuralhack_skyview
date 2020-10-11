import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// import { AddvehicleComponent } from './addvehicle/addvehicle.component';
import { AddvehicleComponent } from './all-vehicles-list/addvehicle/addvehicle.component';
import { VehicleComponent } from './all-vehicles-list/vehicle/vehicle.component';
import { UpdatevehicleComponent } from './all-vehicles-list/updatevehicle/updatevehicle.component';
import { AllVehiclesListComponent } from './all-vehicles-list/all-vehicles-list.component';

import { DriversdetailsComponent } from './dailyhelp/driversdetails/driversdetails.component';
import { DailyhelpComponent } from './dailyhelp/dailyhelp.component';
import { MaidsdetailsComponent } from './dailyhelp/maidsdetails/maidsdetails.component';
import { AlldetailsComponent } from './dailyhelp/alldetails/alldetails.component';
import { AdddailyhelpComponent } from './dailyhelp/adddailyhelp/adddailyhelp.component';

import { ProfileComponent } from './profile/profile.component';
import { ViewprofileComponent } from './profile/viewprofile/viewprofile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';
const routes: Routes = [
  { path: 'all-vehicles-list/list', component: VehicleComponent},
  {path: 'all-vehicles-list', component: AllVehiclesListComponent},
  { path: 'all-vehicles-list/addvehicle', component: AddvehicleComponent },
  { path: 'all-vehicles-list/update-vehicle/:id', component: UpdatevehicleComponent},

  {path: 'dailyhelp/adddailyhelp/driversdetails', component: DriversdetailsComponent},
  {path: 'dailyhelp', component: DailyhelpComponent},
  {path: 'dailyhelp/adddailyhelp/maidsdetails', component: MaidsdetailsComponent},
  {path: 'dailyhelp/alldetails', component: AlldetailsComponent},
  {path: 'dailyhelp/adddailyhelp', component: AdddailyhelpComponent},

  {path: 'profile/edit/:id', component: EditprofileComponent},
  {path: 'profile/view', component: ViewprofileComponent},
  {path: 'profile', component: ProfileComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
