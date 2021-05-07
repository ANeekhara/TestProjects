import { Injectable } from '@angular/core';  
import {Measurements} from '../../shared/measurements';
  
@Injectable({providedIn: 'root'})

export class DataService {  
  
  private data : Measurements;
  
 setOption (setdata : Measurements) {      
    this.data = setdata;
  }  
  
  getOption() {  
    return this.data;  
  }
}