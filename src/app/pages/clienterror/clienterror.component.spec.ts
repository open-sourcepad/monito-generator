import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienterrorComponent } from './clienterror.component';

describe('ClienterrorComponent', () => {
  let component: ClienterrorComponent;
  let fixture: ComponentFixture<ClienterrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienterrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienterrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
