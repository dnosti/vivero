import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphCo2Component } from './graph-co2.component';

describe('GraphCo2Component', () => {
  let component: GraphCo2Component;
  let fixture: ComponentFixture<GraphCo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphCo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphCo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
