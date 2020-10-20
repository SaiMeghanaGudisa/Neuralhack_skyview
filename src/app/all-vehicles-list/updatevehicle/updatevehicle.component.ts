import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClientService, Vehicle} from '../service/http-client.service';
@Component({
  selector: 'app-updatevehicle',
  templateUrl: './updatevehicle.component.html',
  styleUrls: ['./updatevehicle.component.css']
})
export class UpdatevehicleComponent implements OnInit {
  user: Vehicle;
  id: number;

  constructor(private route: ActivatedRoute, private router: Router, private httpClientService: HttpClientService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.httpClientService.getVehicle(this.id).subscribe(
      response => this.handleSuccessfulResponse(response)
    );
  }

  handleSuccessfulResponse(response): void{
    this.user = response;
  }
  updateVehicle(){
    this.httpClientService.updateVehicle(this.id, this.user)
    .subscribe(data => {
      this.vehiclesList();
    });
  }

  vehiclesList()
  {
    this.router.navigate(['/all-vehicles-list/list']);
  }
  home()
  {
    this.router.navigate(['/profile/view']);
  }

}
