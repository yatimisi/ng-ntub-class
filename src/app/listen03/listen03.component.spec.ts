import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listen03Component } from './listen03.component';

describe('Listen03Component', () => {
  let component: Listen03Component;
  let fixture: ComponentFixture<Listen03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listen03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listen03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
