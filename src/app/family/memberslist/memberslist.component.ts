import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Family, HttpClientcreateService} from '../http-clientcreate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memberslist',
  templateUrl: './memberslist.component.html',
  styleUrls: ['./memberslist.component.css']
})
export class MemberslistComponent implements OnInit {

  members: Observable<Family[]>;
  constructor(private httpClientService: HttpClientcreateService,
    private router: Router) { }

  ngOnInit(): void {
    this.httpClientService.getMembers().subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }
  handleSuccessfulResponse(response): void{
    this.members = response;
  }
  add=function(){
    this.router.navigate(['/family/addmember']);
  }

  deleteMember(id: number): void{
    this.httpClientService.deleteMember(id)
    .subscribe(data => {});
  }
  
  updateMember(id:number){
    console.log("called in ts file");
      this.router.navigate(['family/update-member', id]);
  }

  home()
  {
    this.router.navigate(['/profile/view']);
  }

}
