import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientcreateService, Family} from '../http-clientcreate.service';
@Component({
  selector: 'app-updatemember',
  templateUrl: './updatemember.component.html',
  styleUrls: ['./updatemember.component.css']
})
export class UpdatememberComponent implements OnInit {

  user: Family;
  id: number;
  constructor(private route: ActivatedRoute, private router: Router, private httpClientService: HttpClientcreateService) { }

  ngOnInit(): void {
    this.user = new Family('', '', '', '', '', '');
    this.id = this.route.snapshot.params['id'];
  }

  updateMember(){
    this.httpClientService.updateMember(this.id, this.user)
    .subscribe(data => {
      this.membersList();
    });
  }

  membersList()
  {
    this.router.navigate(['/family/memberslist']);
  }
  home()
  {
    this.router.navigate(['/profile/view']);
  }
}
