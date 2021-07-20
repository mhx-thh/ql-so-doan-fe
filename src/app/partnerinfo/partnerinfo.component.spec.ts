import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoComponent } from './partnerinfo.component';

describe('PartnerinfoComponent', () => {
  let component: PartnerinfoComponent;
  let fixture: ComponentFixture<PartnerinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
