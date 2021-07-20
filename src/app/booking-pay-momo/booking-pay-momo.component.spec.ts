import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPayMomoComponent } from './booking-pay-momo.component';

describe('BookingPayMomoComponent', () => {
  let component: BookingPayMomoComponent;
  let fixture: ComponentFixture<BookingPayMomoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingPayMomoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPayMomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
