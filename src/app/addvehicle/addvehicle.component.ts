import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientService, Vehicle} from '../service/http-client.service';
@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {

  user: Vehicle = new Vehicle('','', '', '', '');
  
  constructor(private httpClientService: HttpClientService,
    private router: Router) { }

  ngOnInit(): void{}

  addVehicle(): void {
    console.log(this.user);
    this.httpClientService.addVehicle(this.user)
    .subscribe(data => {
      this.vehiclesList();
    });
  }

  vehiclesList()
  {
    this.router.navigate(['/list']);
  }

}
