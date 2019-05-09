import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OChildComponent } from './o-child.component';

describe('OChildComponent', () => {
  let component: OChildComponent;
  let fixture: ComponentFixture<OChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
