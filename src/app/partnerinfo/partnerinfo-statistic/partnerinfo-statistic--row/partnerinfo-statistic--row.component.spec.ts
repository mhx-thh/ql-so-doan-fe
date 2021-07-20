import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoStatisticRowComponent } from './partnerinfo-statistic--row.component';

describe('PartnerinfoStatisticRowComponent', () => {
  let component: PartnerinfoStatisticRowComponent;
  let fixture: ComponentFixture<PartnerinfoStatisticRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoStatisticRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoStatisticRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
