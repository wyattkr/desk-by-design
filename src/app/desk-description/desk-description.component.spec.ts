import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskDescriptionComponent } from './desk-description.component';

describe('DeskDescriptionComponent', () => {
  let component: DeskDescriptionComponent;
  let fixture: ComponentFixture<DeskDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeskDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
