import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoAccountComponent } from './partnerinfo-account.component';

describe('PartnerinfoAccountComponent', () => {
  let component: PartnerinfoAccountComponent;
  let fixture: ComponentFixture<PartnerinfoAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
