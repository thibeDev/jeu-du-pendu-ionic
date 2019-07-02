import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewGamePage } from './new-game.page';

describe('NewGamePage', () => {
  let component: NewGamePage;
  let fixture: ComponentFixture<NewGamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
