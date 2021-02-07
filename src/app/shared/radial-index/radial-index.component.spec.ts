import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialIndexComponent } from './radial-index.component';

describe('RadialIndexComponent', () => {
  let component: RadialIndexComponent;
  let fixture: ComponentFixture<RadialIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadialIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
