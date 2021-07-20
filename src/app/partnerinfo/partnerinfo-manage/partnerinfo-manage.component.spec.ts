import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoManageComponent } from './partnerinfo-manage.component';

describe('PartnerinfoManageComponent', () => {
  let component: PartnerinfoManageComponent;
  let fixture: ComponentFixture<PartnerinfoManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoManageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
