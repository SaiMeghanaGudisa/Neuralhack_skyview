import { Component, OnInit } from '@angular/core';
import { Dailyhelp, HttpClientService } from '../http-client.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-alldetails',
  templateUrl: './alldetails.component.html',
  styleUrls: ['./alldetails.component.css']
})
export class AlldetailsComponent implements OnInit {

  help: Observable<Dailyhelp[]>;
  constructor(private httpClientService: HttpClientService, private router: Router) { }

  ngOnInit(): void {
    this.httpClientService.getPersons().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response): void{
    this.help = response;
  }

  add = function(){
    this.router.navigate(['/dailyhelp/adddailyhelp']);
    // this.router.navigate(['/dailyhelp/driversdetails']);
  }
  home()
  {
    this.router.navigate(['/profile/view']);
  }

}
