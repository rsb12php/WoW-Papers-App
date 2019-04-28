import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopPage } from './pop.page';

describe('PopPage', () => {
  let component: PopPage;
  let fixture: ComponentFixture<PopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
