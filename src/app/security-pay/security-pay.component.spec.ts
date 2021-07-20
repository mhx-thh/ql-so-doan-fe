import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityPayComponent } from './security-pay.component';

describe('SecurityPayComponent', () => {
  let component: SecurityPayComponent;
  let fixture: ComponentFixture<SecurityPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
