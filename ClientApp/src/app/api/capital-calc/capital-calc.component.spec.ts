import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalCalcComponent } from './capital-calc.component';

describe('CapitalCalcComponent', () => {
  let component: CapitalCalcComponent;
  let fixture: ComponentFixture<CapitalCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapitalCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapitalCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
