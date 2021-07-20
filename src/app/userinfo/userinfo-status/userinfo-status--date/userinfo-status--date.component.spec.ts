import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoStatusDateComponent } from './userinfo-status--date.component';

describe('UserinfoStatusDateComponent', () => {
  let component: UserinfoStatusDateComponent;
  let fixture: ComponentFixture<UserinfoStatusDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoStatusDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoStatusDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
