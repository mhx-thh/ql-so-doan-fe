import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserinfoServiceTagComponent } from './userinfo-service--tag.component';

describe('UserinfoServiceTagComponent', () => {
  let component: UserinfoServiceTagComponent;
  let fixture: ComponentFixture<UserinfoServiceTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserinfoServiceTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserinfoServiceTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
