import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcircleComponent } from './addcircle.component';

describe('AddcircleComponent', () => {
  let component: AddcircleComponent;
  let fixture: ComponentFixture<AddcircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
