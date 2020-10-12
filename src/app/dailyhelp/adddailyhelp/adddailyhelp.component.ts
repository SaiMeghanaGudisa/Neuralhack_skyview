import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adddailyhelp',
  templateUrl: './adddailyhelp.component.html',
  styleUrls: ['./adddailyhelp.component.css']
})
export class AdddailyhelpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  home()
  {
    this.router.navigate(['/profile/view']);
  }

}
