import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipCalcComponent } from './ship-calc.component';

describe('ShipCalcComponent', () => {
  let component: ShipCalcComponent;
  let fixture: ComponentFixture<ShipCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShipCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShipCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
