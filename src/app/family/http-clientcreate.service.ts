import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class Family{
  constructor(
    public id: string,
    public residentId: string,
    public name: string,
    public age: string,
    public email: string,
    public phno: string
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientcreateService {

  private baseUrl = 'http://localhost:9090/family/getall';
  constructor(private httpClient: HttpClient) { }

  getMembers(): Observable<Family[]>
  {
    return this.httpClient.get<Family[]>(`${this.baseUrl}`);
  }

  public addMember(member)
  {
      alert('Member added successfully!');
      return this.httpClient.post<Family>('http://localhost:9090/family/addmember', member);
  }

  deleteMember(id: number)
  {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  public updateMember(id, member)
  {
    console.log('Member details updated');
    return this.httpClient.put(`${this.baseUrl}/${id}`, member);
  }
}
