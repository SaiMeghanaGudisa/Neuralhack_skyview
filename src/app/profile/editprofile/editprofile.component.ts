import { Component, OnInit } from '@angular/core';
import { Residents, HttpClientService } from '../http-client.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editprofile',
  templateUrl: './editprofile.component.html',
  styleUrls: ['./editprofile.component.css']
})
export class EditprofileComponent implements OnInit {
  id: number;
  resident: Residents;
  constructor(private httpClientService: HttpClientService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.httpClientService.getResident(this.id).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response): void{
    this.resident = response;
  }

  update()
  {
    this.httpClientService.updateProfile(this.id, this.resident)
    .subscribe(data => {
      this.profile();
    });
  }

  profile()
  {
    this.router.navigate(['/profile/view']);
  }
  home()
  {
    this.router.navigate(['/profile/view']);
  }


}
