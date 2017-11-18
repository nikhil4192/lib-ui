import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComLibSignupComponent } from './com-lib-signup.component';

describe('ComLibSignupComponent', () => {
  let component: ComLibSignupComponent;
  let fixture: ComponentFixture<ComLibSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComLibSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComLibSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
