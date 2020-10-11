import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Residents, HttpClientService } from '../http-client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css']
})
export class ViewprofileComponent implements OnInit {

  residents: Observable<Residents[]>;
  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void {
    this.httpClientService.getResidents().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response): void{
    this.residents = response;
  }

  editprofile(id: number)
  {
    console.log("navigated to edit page");
    this.router.navigate(['profile/edit', id]);
  }

}
