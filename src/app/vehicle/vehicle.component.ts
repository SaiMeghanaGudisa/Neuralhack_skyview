
import { Component, OnInit } from '@angular/core';
import {Vehicle, HttpClientService} from '../service/http-client.service';
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  vehicles: Vehicle[];

  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void{
    this.httpClientService.getVehicles().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response): void{
    this.vehicles = response;
  }


  }

