import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listen05Component } from './listen05.component';

describe('Listen05Component', () => {
  let component: Listen05Component;
  let fixture: ComponentFixture<Listen05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listen05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listen05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
