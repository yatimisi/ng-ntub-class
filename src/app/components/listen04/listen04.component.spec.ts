import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listen04Component } from './listen04.component';

describe('Listen04Component', () => {
  let component: Listen04Component;
  let fixture: ComponentFixture<Listen04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listen04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listen04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
