import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitePinDetailComponent } from './site-pin-detail.component';

describe('SitePinDetailComponent', () => {
  let component: SitePinDetailComponent;
  let fixture: ComponentFixture<SitePinDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitePinDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitePinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
