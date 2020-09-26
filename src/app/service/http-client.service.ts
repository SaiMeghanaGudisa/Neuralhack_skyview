import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Vehicle{
  constructor(
    public residentId: string,
    public vehicleType: string,
    public registrationNo: string,
    public vehicleModel: string,
  ) {} 
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getVehicles()
  {
    return this.httpClient.get<Vehicle[]>('http://localhost:9090/vehicle/getvehicles');
  }
  public updateVehicle(vehicle)
  {
    console.log('vehicle details updated');
    return this.httpClient.put<Vehicle>('http://localhost:9090/vehicle/updatevehicle', vehicle);
  }
  public addVehicle(vehicle)
  {
    console.log('vehicle added!');
    return this.httpClient.post<Vehicle>('http://localhost:9090/vehicle/addvehicle', vehicle);
  }
}