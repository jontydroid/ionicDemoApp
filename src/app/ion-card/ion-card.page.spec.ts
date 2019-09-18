import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonCardPage } from './ion-card.page';

describe('IonCardPage', () => {
  let component: IonCardPage;
  let fixture: ComponentFixture<IonCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonCardPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
