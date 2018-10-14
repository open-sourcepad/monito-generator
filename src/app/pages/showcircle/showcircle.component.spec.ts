import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcircleComponent } from './showcircle.component';

describe('ShowcircleComponent', () => {
  let component: ShowcircleComponent;
  let fixture: ComponentFixture<ShowcircleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowcircleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowcircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
