import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaCasaDePapelPage } from './la-casa-de-papel.page';

describe('LaCasaDePapelPage', () => {
  let component: LaCasaDePapelPage;
  let fixture: ComponentFixture<LaCasaDePapelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaCasaDePapelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaCasaDePapelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
