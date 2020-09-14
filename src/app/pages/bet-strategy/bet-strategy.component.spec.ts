import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetStrategyComponent } from './bet-strategy.component';

describe('BetStrategyComponent', () => {
  let component: BetStrategyComponent;
  let fixture: ComponentFixture<BetStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetStrategyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
