import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { CalculateService } from './calculate.service';
import { DataService } from './data.service';

describe('CalculateService', () => {
    let service: CalculateService;   
    class fakeservice{};
    beforeEach(() => {      
        TestBed.configureTestingModule({
            providers: [CalculateService, {provide: DataService, usevalue :fakeservice}]
        });
        service = TestBed.get(CalculateService);
    });
 

    describe('Convert Centigrade to kelvin', () => {
        it('should save a preference', () => {    
                 let result =service.CentigradeToOther(10,'K');
                 expect(result).toEqual(283.15);
        }                        
    )});
});
