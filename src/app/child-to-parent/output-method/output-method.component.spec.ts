import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputMethodComponent } from './output-method.component';

describe('OutputMethodComponent', () => {
  let component: OutputMethodComponent;
  let fixture: ComponentFixture<OutputMethodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputMethodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
