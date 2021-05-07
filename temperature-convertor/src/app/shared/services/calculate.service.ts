
import { Injectable } from '@angular/core';
import { TUnits } from 'src/app/shared/enums';
import { Measurements } from '../measurements';
import { DataService } from './data.service';

@Injectable({ providedIn: 'root' })

export class CalculateService {
  private data: Measurements;

  constructor(private dataService: DataService) { }

  Calculate() {
    this.data = this.dataService.getOption();
    let calculatedTo: number;
    if (this.data.unitSelectedFrom === TUnits.C) {
      calculatedTo = +(this.CentigradeToOther(this.data.calculatedValueFrom, this.data.unitSelectedTo)).toFixed(3);
    } else if (this.data.unitSelectedFrom === TUnits.K) {
      calculatedTo = +(this.KelvinToOther(this.data.calculatedValueFrom, this.data.unitSelectedTo)).toFixed(3);
    } else if (this.data.unitSelectedFrom === TUnits.F) {
      calculatedTo = +(this.FahrenheitToOther(this.data.calculatedValueFrom, this.data.unitSelectedTo)).toFixed(3);
    }
    this.data.calculatedValueTo = calculatedTo;
    this.dataService.setOption(this.data);
  }

  CentigradeToOther(centigrade: number, toUnit: string): number {
    if (toUnit == TUnits.F) {
      return (centigrade * (9 / 5)) + 32;
    } else if (toUnit == TUnits.K) {
      return (centigrade + 273.15);
    } else
      return centigrade;
  }

  FahrenheitToOther(fahrenheit: number, toUnit: string): number {
    if (toUnit == TUnits.C) {
      return ((fahrenheit - 32) * (5 / 9));
    }
    else if (toUnit == TUnits.K) {
      return (this.CentigradeToOther(this.FahrenheitToOther(fahrenheit, TUnits.C), TUnits.K));
    } else {
      return fahrenheit;
    }
  }


  KelvinToOther(kelvin: number, toUnit: string): number {
    if (toUnit == TUnits.C) {
      return (kelvin - 273.15);
    }
    else if (toUnit == TUnits.F) {
      return (this.CentigradeToOther(this.KelvinToOther(kelvin, TUnits.C), TUnits.F));
    } else {
      return kelvin;
    }
  }
}