
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

  deleteVehicle(id: number): void{
    this.httpClientService.deleteVehicle(id)
    .subscribe(data => {});
  }
  
  updateVehicle(id:number){
      this.router.navigate(['update-vehicle',id]);
  }


  }

