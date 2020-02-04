import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Listen06Component } from './listen06.component';

describe('Listen06Component', () => {
  let component: Listen06Component;
  let fixture: ComponentFixture<Listen06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Listen06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Listen06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
