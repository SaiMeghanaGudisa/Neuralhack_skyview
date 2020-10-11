import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
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
    this.resident = new Residents('','','','','');
    this.id = this.route.snapshot.params['id'];
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


}
