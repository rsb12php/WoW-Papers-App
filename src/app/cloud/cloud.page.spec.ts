import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudPage } from './cloud.page';

describe('CloudPage', () => {
  let component: CloudPage;
  let fixture: ComponentFixture<CloudPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
