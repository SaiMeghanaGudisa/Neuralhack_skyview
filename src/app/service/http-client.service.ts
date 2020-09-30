import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { exit } from 'process';
// import { ControlContainer } from '@angular/forms';

export class Vehicle{
  constructor(
    public residentId: string,
    public vehicleType: string,
    public registrationNo: string,
    public vehicleMake: string
  ) {}
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }
  count = 0;
  getVehicles()
  {
    return this.httpClient.get<Vehicle[]>('http://localhost:9090/vehicle/getvehicles');
  }
  
  public updateVehicle(vehicle)
  {
    console.log('vehicle details updated');
    return this.httpClient.put<Vehicle>('http://localhost:9090/vehicle/updatevehicle', vehicle);
  }

  public deleteVehicle(vehicle)
  {
    this.count--;
    console.log(this.count + 'vehicle details deleted');
    return this.httpClient.delete<Vehicle>('http://localhost:9090/vehicle/getvehicles/'+ vehicle.registrationNo);
  }
  // public addVehicle(values)
  // {
  //   console.log('vehicle added!');
  //   return this.httpClient.post<Vehicle[]>('http://localhost:9090/vehicle/addvehicle', values);
  // }
  public addVehicle(vehicle)
  {
    if  (this.count < 3)
    {
      this.count++;
      console.log(this.count + 'vehicle added!');
      alert('vehicle added successfully!');
      return this.httpClient.post<Vehicle>('http://localhost:9090/vehicle/addvehicle', vehicle);
    }
    else{
      alert('Maximum 3 vehicles are allowed!');
    }
  }
}