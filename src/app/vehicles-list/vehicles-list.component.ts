import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { HttpClientService} from '../service/http-client.service';
@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})

export class VehiclesListComponent implements OnInit {
 userTable: FormGroup;
  control: FormArray;
  mode: boolean;
  touchedRows: any;
  
  // user: Vehicle = new Vehicle('','','','');
  constructor(private fb: FormBuilder,public httpClientService: HttpClientService) {} 
  ngOnInit(): void {
    this.touchedRows = {};
    this.userTable = this.fb.group({
      tableRows: this.fb.array([])
  });
    this.addRow();
  }
  
  ngAfterOnInit() {
    this.control = this.userTable.get('tableRows') as FormArray;
  }

  initiateForm(): FormGroup {
    return this.fb.group({
      residentId: ['', Validators.required],
      vehicleType: ['',  Validators.required],
      registrationNo: ['', [Validators.required,Validators.minLength(10)]],
      vehicleMake: ['',[Validators.required, Validators.minLength(4)]],
      // mobNumber: ['', [Validators.required, Validators.maxLength(10)]],
      isEditable: [true]
    });
  }

  addRow() {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.push(this.initiateForm());
  }

  deleteRow(index: number) {
    const control =  this.userTable.get('tableRows') as FormArray;
    control.removeAt(index);
  }

  editRow(group: FormGroup) {
    group.get('isEditable').setValue(true);
  }

  doneRow(group: FormGroup) {
    group.get('isEditable').setValue(false);
  }

  saveUserDetails() {
    console.log(this.userTable.value);
  }
  get getFormControls() {
    const control = this.userTable.get('tableRows') as FormArray;
    return control;
  }

  submitForm() {
    const control = this.userTable.get('tableRows') as FormArray;
    this.touchedRows = control.controls.filter(row => row.touched).map(row => row.value);
    //console.log(this.touchedRows);
    console.log(this.userTable.value);
    alert(this.userTable.value);
    //alert(this.touchedRows);
    this.httpClientService.addVehicle(this.userTable.value)
    .subscribe(data => {
      alert('vehicle added successfully');
    });
  }

  // addVehicle(): void {
  //   console.log(this.user);
  //   this.httpClientService.addVehicle(this.user)
  //   .subscribe(data => {
  //     alert('vehicle added successfully');
  //   });
  // }

  // toggleTheme() {
  //   this.mode = !this.mode;
  // }
}

