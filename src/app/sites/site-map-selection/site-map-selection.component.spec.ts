import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMapSelectionComponent } from './site-map-selection.component';

describe('SiteMapSelectionComponent', () => {
  let component: SiteMapSelectionComponent;
  let fixture: ComponentFixture<SiteMapSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteMapSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteMapSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
