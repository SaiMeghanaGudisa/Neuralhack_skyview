import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export class Residents {
  constructor(
    public residentId: string,
    public name: string,
    public age: string,
    public phno: string,
    public email: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private baseUrl = 'http://localhost:9090/profile/getmembers';
  constructor(private httpClient: HttpClient) { }
  
  getResidents(): Observable<Residents[]>
  {
      return this.httpClient.get<Residents[]>(`${this.baseUrl}`);
  }

  updateProfile(id, member)
  {
    console.log("profile updated!");
    return this.httpClient.put(`${this.baseUrl}/${id}`, member);
  }

}
