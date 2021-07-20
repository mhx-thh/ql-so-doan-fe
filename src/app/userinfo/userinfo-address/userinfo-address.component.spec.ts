import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoAddressComponent } from './userinfo-address.component';

describe('UserinfoAddressComponent', () => {
  let component: UserinfoAddressComponent;
  let fixture: ComponentFixture<UserinfoAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoAddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
