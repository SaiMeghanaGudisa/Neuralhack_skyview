import { Component, OnInit } from '@angular/core';
import { HttpClientService, Vehicle} from '../service/http-client.service';
@Component({
  selector: 'app-addvehicle',
  templateUrl: './addvehicle.component.html',
  styleUrls: ['./addvehicle.component.css']
})
export class AddvehicleComponent implements OnInit {

  user: Vehicle = new Vehicle('','','','');
  constructor(private httpClientService: HttpClientService) { }

  ngOnInit(): void{
  }

  addVehicle(): void {
    console.log(this.user);
    this.httpClientService.addVehicle(this.user)
    .subscribe(data => {
      alert('vehicle added successfully');
    });
  }

  // updateVehicle(): void{
  //   this.httpClientService.updateVehicle(this.user)
  //   .subscribe(data => {
  //     alert('vehicle added successfully');
  //   });
  // }

}
