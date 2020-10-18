import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientcreateService, Family} from '../http-clientcreate.service';

@Component({
  selector: 'app-addmember',
  templateUrl: './addmember.component.html',
  styleUrls: ['./addmember.component.css']
})
export class AddmemberComponent implements OnInit {

  user: Family = new Family('', '', '', '', '', '');
  constructor(private httpClientService: HttpClientcreateService,
    private router: Router) { }

  ngOnInit(): void {}

  addMember(): void {
    console.log(this.user);
    this.membersList();
    this.httpClientService.addMember(this.user)
    .subscribe(data => {
    });
  }

  home()
  {
    this.router.navigate(['/profile/view']);
  }
  
  membersList()
  {
    this.router.navigate(['family/memberslist']);
  }

}
