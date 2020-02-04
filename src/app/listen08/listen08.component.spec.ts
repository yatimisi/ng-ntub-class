import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listen08Component } from './listen08.component';

describe('Listen08Component', () => {
  let component: Listen08Component;
  let fixture: ComponentFixture<Listen08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listen08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listen08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
