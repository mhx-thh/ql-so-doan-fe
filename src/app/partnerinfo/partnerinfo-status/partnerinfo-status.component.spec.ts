import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoStatusComponent } from './partnerinfo-status.component';

describe('PartnerinfoStatusComponent', () => {
  let component: PartnerinfoStatusComponent;
  let fixture: ComponentFixture<PartnerinfoStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
