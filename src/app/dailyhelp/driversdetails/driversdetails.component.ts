import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Dailyhelp, HttpClientService } from '../http-client.service';
@Component({
  selector: 'app-driversdetails',
  templateUrl: './driversdetails.component.html',
  styleUrls: ['./driversdetails.component.css']
})
export class DriversdetailsComponent implements OnInit {

  help: Observable<Dailyhelp[]>;

  constructor(private httpClientService: HttpClientService, private router:Router) { }

  ngOnInit(): void {
    this.httpClientService.getPersons().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response): void{
    this.help = response;
  }


  select(driver: Dailyhelp, id:number){
    console.log(id + ' status changed!');
    this.httpClientService.changeStatusToSelect(driver, id)
    .subscribe(data => {});
  }

  unselect(driver: Dailyhelp, id:number){
    console.log(id + ' status changed!');
    this.httpClientService.changeStatusToUnselect(driver, id)
    .subscribe(data => {});
  }

  drivers()
  {
    this.router.navigate(['/dailyhelp/alldetails']);
  }

}
