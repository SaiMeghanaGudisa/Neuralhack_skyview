import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs';

export class Dailyhelp{
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public gender: string,
    public phno: number,
    public status: boolean,
  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  //private baseUrl = 'http://localhost:9090/dailyhelp/getdetails';
  constructor(private httpClient: HttpClient) { }

  getPersonById(id: number){
    console.log('sent data to spring');
    return this.httpClient.get('http://localhost:9090/dailyhelp/getperson/' + id);
  }

  getPersons(): Observable<Dailyhelp[]>{
    return this.httpClient.get<Dailyhelp[]>('http://localhost:9090/dailyhelp/getall');
  }

  changeStatusToSelect(helper:Dailyhelp, id:number){
    alert('You have selected successfully!');
    return this.httpClient.put('http://localhost:9090/dailyhelp/select/' + id, helper);
  }
  changeStatusToUnselect(helper:Dailyhelp, id:number){
    alert('You have unselected successfully!');
    return this.httpClient.put('http://localhost:9090/dailyhelp/unselect/' + id, helper);
  }

}
