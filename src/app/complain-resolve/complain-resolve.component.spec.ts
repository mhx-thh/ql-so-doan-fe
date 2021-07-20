import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplainResolveComponent } from './complain-resolve.component';

describe('ComplainResolveComponent', () => {
  let component: ComplainResolveComponent;
  let fixture: ComponentFixture<ComplainResolveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplainResolveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplainResolveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
