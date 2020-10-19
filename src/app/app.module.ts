import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { VehicleComponent } from './all-vehicles-list/vehicle/vehicle.component';
import { AddvehicleComponent } from './all-vehicles-list/addvehicle/addvehicle.component';
import { UpdatevehicleComponent } from './all-vehicles-list/updatevehicle/updatevehicle.component';
import { AllVehiclesListComponent} from './all-vehicles-list/all-vehicles-list.component';

import { DriversdetailsComponent } from './dailyhelp/driversdetails/driversdetails.component';
import { DailyhelpComponent } from './dailyhelp/dailyhelp.component';
import { MaidsdetailsComponent } from './dailyhelp/maidsdetails/maidsdetails.component';
import { AlldetailsComponent } from './dailyhelp/alldetails/alldetails.component';
import { AdddailyhelpComponent } from './dailyhelp/adddailyhelp/adddailyhelp.component';

import { ProfileComponent } from './profile/profile.component';
import { ViewprofileComponent } from './profile/viewprofile/viewprofile.component';
import { EditprofileComponent } from './profile/editprofile/editprofile.component';

import { HomepageComponent } from './homepage/homepage.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { FamilyComponent } from './family/family.component';
import { AddmemberComponent } from './family/addmember/addmember.component';
import { MemberslistComponent } from './family/memberslist/memberslist.component';
import { UpdatememberComponent } from './family/updatemember/updatemember.component';
import { ConstructionComponent } from './construction/construction.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    AddvehicleComponent,
    UpdatevehicleComponent,
    AllVehiclesListComponent,
    DriversdetailsComponent,
    DailyhelpComponent,
    MaidsdetailsComponent,
    AlldetailsComponent,
    AdddailyhelpComponent,
    ProfileComponent,
    ViewprofileComponent,
    EditprofileComponent,
    HomepageComponent,
    SidebarComponent,
    FamilyComponent,
    AddmemberComponent,
    MemberslistComponent,
    UpdatememberComponent,
    ConstructionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
