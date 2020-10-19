import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Vehicle{
  constructor(
    public id: string,
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

  private baseUrl = 'http://localhost:9090/vehicle/getvehicles';
  constructor(private httpClient: HttpClient) { }
  count = 0;
  getVehicles(): Observable<Vehicle[]>
  {
    return this.httpClient.get<Vehicle[]>(`${this.baseUrl}`);
  }
  getVehicle(id: number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/${id}`);
  }
  
  public updateVehicle(id, vehicle)
  {
    console.log('vehicle details updated');
    alert("Vehicle details updated successfully");
    return this.httpClient.put(`${this.baseUrl}/${id}`, vehicle);
  }

  deleteVehicle(id: number)
  {
    this.count--;
    console.log(this.count + 'vehicle details deleted');
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
 
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