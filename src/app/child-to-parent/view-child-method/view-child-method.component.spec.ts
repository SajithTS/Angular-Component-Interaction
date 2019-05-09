import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildMethodComponent } from './view-child-method.component';

describe('ViewChildMethodComponent', () => {
  let component: ViewChildMethodComponent;
  let fixture: ComponentFixture<ViewChildMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewChildMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewChildMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
