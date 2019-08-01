import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphLuzComponent } from './graph-luz.component';

describe('GraphLuzComponent', () => {
  let component: GraphLuzComponent;
  let fixture: ComponentFixture<GraphLuzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphLuzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphLuzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
