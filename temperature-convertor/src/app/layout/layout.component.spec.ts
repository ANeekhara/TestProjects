import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { CalculateService } from '../shared/services/calculate.service';
import { DataService } from '../shared/services/data.service';
import { UnitsDataService } from '../shared/services/units-data.service';

import { LayoutComponent } from './layout.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;
  class MockUnitsDataService{};
  class MockCalculateService{};
  class MockDataService{};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutComponent],
      providers: [
        FormBuilder]    
    }).overrideComponent(LayoutComponent, {
      set: {
        providers: [
          {provide : UnitsDataService, useClass: MockUnitsDataService },
          {provide : CalculateService, useClass: MockCalculateService },
          {provide : DataService, useClass: MockDataService }
        ]
      }
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
