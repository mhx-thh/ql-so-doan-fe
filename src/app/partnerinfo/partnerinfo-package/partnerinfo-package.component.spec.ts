import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerinfoPackageComponent } from './partnerinfo-package.component';

describe('PartnerinfoPackageComponent', () => {
  let component: PartnerinfoPackageComponent;
  let fixture: ComponentFixture<PartnerinfoPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartnerinfoPackageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerinfoPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
