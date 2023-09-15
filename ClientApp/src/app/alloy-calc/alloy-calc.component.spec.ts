import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloyCalcComponent } from './alloy-calc.component';

describe('AlloyCalcComponent', () => {
  let component: AlloyCalcComponent;
  let fixture: ComponentFixture<AlloyCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlloyCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlloyCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
