import { Component, OnInit } from '@angular/core';
import { Measurements } from '../shared/measurements';
import {FormsModule, FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

import { CalculateService } from '../shared/services/calculate.service';
import { DataService } from '../shared/services/data.service';
import { UnitsDataService } from '../shared/services/units-data.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [UnitsDataService, CalculateService, DataService]
})
export class LayoutComponent implements OnInit {
  units: { value: string, description: string }[] = [];
  data: Measurements;
  dataForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private unitsDataService: UnitsDataService, private calculateService: CalculateService,
    private dataService: DataService) { }

  ngOnInit(): void {
    this.units = this.unitsDataService.units;
    this.dataForm = this.formbuilder.group({
      unitSelectedFrom: ['',Validators.required],
      unitSelectedTo: ['',Validators.required],
      calculatedValueFrom: ['',Validators.required],
      calculatedValueTo: ['']
    });
   this.data = new Measurements();
  }

  Calculate() {
    if (this.validateData()){
      this.dataService.setOption(this.data);
      this.calculateService.Calculate();
      this.dataForm.patchValue({'calculatedValueTo': this.data.calculatedValueTo})
    }    
  }
  validateData () {  
    if (this.dataForm.invalid) {
      return false
    } else {
      this.data = Object.assign(this.data, this.dataForm.value);
      return true;
    }   
  }
}
