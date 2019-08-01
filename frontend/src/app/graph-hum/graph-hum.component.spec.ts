import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphHumComponent } from './graph-hum.component';

describe('GraphHumComponent', () => {
  let component: GraphHumComponent;
  let fixture: ComponentFixture<GraphHumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphHumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphHumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
