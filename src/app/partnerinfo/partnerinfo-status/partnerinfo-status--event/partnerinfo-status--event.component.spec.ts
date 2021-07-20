import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoStatusEventComponent } from './partnerinfo-status--event.component';

describe('PartnerinfoStatusEventComponent', () => {
  let component: PartnerinfoStatusEventComponent;
  let fixture: ComponentFixture<PartnerinfoStatusEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoStatusEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoStatusEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
