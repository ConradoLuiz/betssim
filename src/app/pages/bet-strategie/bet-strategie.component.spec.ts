import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetStrategieComponent } from './bet-strategie.component';

describe('BetStrategieComponent', () => {
  let component: BetStrategieComponent;
  let fixture: ComponentFixture<BetStrategieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetStrategieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetStrategieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
