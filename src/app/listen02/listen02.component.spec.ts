import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listen02Component } from './listen02.component';

describe('Listen02Component', () => {
  let component: Listen02Component;
  let fixture: ComponentFixture<Listen02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listen02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listen02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
