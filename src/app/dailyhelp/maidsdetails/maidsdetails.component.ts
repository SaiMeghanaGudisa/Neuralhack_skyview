import { Component, OnInit } from '@angular/core';
import { Dailyhelp, HttpClientService } from '../http-client.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-maidsdetails',
  templateUrl: './maidsdetails.component.html',
  styleUrls: ['./maidsdetails.component.css']
})
export class MaidsdetailsComponent implements OnInit {

  help: Observable<Dailyhelp[]>;

  constructor(private httpClientService: HttpClientService, private router:Router) { }

  ngOnInit(): void {
    this.httpClientService.getPersons().subscribe(
      response => this.handleSuccessfulResponse(response));
  }
  handleSuccessfulResponse(response): void{
    this.help = response;
  }



  select(maid: Dailyhelp, id:number){
    console.log(id + ' status changed!');
    this.httpClientService.changeStatusToSelect(maid, id)
    .subscribe(data => {});
  }

  unselect(maid: Dailyhelp, id:number){
    console.log(id + ' status changed!');
    this.httpClientService.changeStatusToUnselect(maid, id)
    .subscribe(data => {});
  }

  maids(){
    this.router.navigate(['/dailyhelp/alldetails']);
  }
  home()
  {
    this.router.navigate(['/profile/view']);
  }
}
