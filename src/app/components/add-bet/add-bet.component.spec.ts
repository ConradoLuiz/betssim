import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBetComponent } from './add-bet.component';

describe('AddBetComponent', () => {
  let component: AddBetComponent;
  let fixture: ComponentFixture<AddBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
