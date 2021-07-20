import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderInsideComponent } from './header-inside.component';

describe('HeaderComponent', () => {
  let component: HeaderInsideComponent;
  let fixture: ComponentFixture<HeaderInsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderInsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
