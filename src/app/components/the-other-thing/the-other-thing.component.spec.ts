import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheOtherThingComponent } from './the-other-thing.component';

describe('TheOtherThingComponent', () => {
  let component: TheOtherThingComponent;
  let fixture: ComponentFixture<TheOtherThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheOtherThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheOtherThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
