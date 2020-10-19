import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-construction',
  templateUrl: './construction.component.html',
  styleUrls: ['./construction.component.css']
})
export class ConstructionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  home()
  {
    this.router.navigate(['/profile/view']);
  }
}
