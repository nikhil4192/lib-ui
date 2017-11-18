import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComLibLoginComponent } from './com-lib-login.component';

describe('ComLibLoginComponent', () => {
  let component: ComLibLoginComponent;
  let fixture: ComponentFixture<ComLibLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComLibLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComLibLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
