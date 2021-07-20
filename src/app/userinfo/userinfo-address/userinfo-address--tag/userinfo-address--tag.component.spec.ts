import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoAddressTagComponent } from './userinfo-address--tag.component';

describe('UserinfoComponentAddressTag', () => {
  let component: UserinfoAddressTagComponent;
  let fixture: ComponentFixture<UserinfoAddressTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoAddressTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoAddressTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
