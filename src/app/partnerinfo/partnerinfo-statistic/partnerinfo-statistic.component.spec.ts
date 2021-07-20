import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoStatisticComponent } from './partnerinfo-statistic.component';

describe('PartnerinfoStatisticComponent', () => {
  let component: PartnerinfoStatisticComponent;
  let fixture: ComponentFixture<PartnerinfoStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoStatisticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
