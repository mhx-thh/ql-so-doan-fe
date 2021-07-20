import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoStatusEventComponent } from './userinfo-status--event.component';

describe('UserinfoStatusEventComponent', () => {
  let component: UserinfoStatusEventComponent;
  let fixture: ComponentFixture<UserinfoStatusEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoStatusEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoStatusEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
