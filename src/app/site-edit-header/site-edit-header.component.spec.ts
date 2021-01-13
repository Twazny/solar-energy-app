import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEditHeaderComponent } from './site-edit-header.component';

describe('SiteEditHeaderComponent', () => {
  let component: SiteEditHeaderComponent;
  let fixture: ComponentFixture<SiteEditHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteEditHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEditHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
