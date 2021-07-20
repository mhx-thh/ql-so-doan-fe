import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoManageRowComponent } from './partnerinfo-manage--row.component';

describe('PartnerinfoManageRowComponent', () => {
  let component: PartnerinfoManageRowComponent;
  let fixture: ComponentFixture<PartnerinfoManageRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoManageRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoManageRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
