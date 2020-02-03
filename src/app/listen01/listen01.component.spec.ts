import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listen01Component } from './listen01.component';

describe('Listen01Component', () => {
  let component: Listen01Component;
  let fixture: ComponentFixture<Listen01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listen01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listen01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
