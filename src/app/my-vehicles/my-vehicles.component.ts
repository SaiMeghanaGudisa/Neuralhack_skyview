import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
//import { Vehicle } from '../service/http-client.service';
import { HttpClientService, Vehicle} from '../service/http-client.service';
@Component({
  selector: 'app-my-vehicles',
  templateUrl: './my-vehicles.component.html',
  styleUrls: ['./my-vehicles.component.css']
})
export class MyVehiclesComponent implements OnInit {
  constructor(private httpClientService: HttpClientService) { }
  editField: string;
  mine: Vehicle = new Vehicle('','','','');
    Vehicle: Array<any> = [     
      // { id: 1, name: 'Aurelia Vega', age: 30, companyName: 'Deepends', country: 'Spain', city: 'Madrid' },
      // { id: 2, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
      { id: '1', residentId: '', vehicleType: '', vehicleModel: '', RegistrationNo: ''},
      { id: '2', residentId: '', vehicleType: '', vehicleModel: '', RegistrationNo: ''},
      { id: '3', residentId: '', vehicleType: '', vehicleModel: '', RegistrationNo: ''},
    ];

    // awaitingPersonList: Array<any> = [
    //   { id: 4, name: 'Guerra Cortez', age: 45, companyName: 'Insectus', country: 'USA', city: 'San Francisco' },
    //   { id: 5, name: 'Guadalupe House', age: 26, companyName: 'Isotronic', country: 'Germany', city: 'Frankfurt am Main' },
    // ];

    updateList(id: number, property: string, event: any): void {
      const editField = event.target.textContent;
      this.Vehicle[id][property] = editField;
    }

    // remove(id: any): void {
    //   //this.awaitingPersonList.push(this.personList[id]);
    //   this.Vehicle.splice(id, 1);
    // }

    add(): void {
      
        this.Vehicle.push(this.mine);
        // this.awaitingPersonList.splice(0, 1);
      
    }

    changeValue(id: number, property: string, event: any): void {
      this.editField = event.target.textContent;
    }
 
  ngOnInit(): void {
  }
}
