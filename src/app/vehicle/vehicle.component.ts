
import { Component, OnInit } from '@angular/core';
import {Vehicle, HttpClientService} from '../service/http-client.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  //vehicles: Vehicle[];
  vehicles: Observable<Vehicle[]>;
  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void{
    this.httpClientService.getVehicles().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response): void{
    this.vehicles = response;
  }

  add=function(){
    this.router.navigate(['/addvehicle']);
  }

  // deleteVehicle(vehicle: Vehicle): void{
  //   this.httpClientService.deleteVehicle(vehicle)
  //   .subscribe(data => {
  //       this.vehicles = this.vehicles.filter(u => u !== vehicle);
  //     });
  // }
  deleteVehicle(id: number): void{
    this.httpClientService.deleteVehicle(id)
    .subscribe(data => {});
  }
  
  
  // updateVehicle(vehicle: Vehicle): void{
  //   this.httpClientService.updateVehicle(vehicle)
  //   .subscribe(date => {});
  // }

    updateVehicle(id:number){
      this.router.navigate(['update-vehicle',id]);
    }


  }

