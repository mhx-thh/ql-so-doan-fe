import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoStatusDateComponent } from './partnerinfo-status--date.component';

describe('PartnerinfoStatusDateComponent', () => {
  let component: PartnerinfoStatusDateComponent;
  let fixture: ComponentFixture<PartnerinfoStatusDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoStatusDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoStatusDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
