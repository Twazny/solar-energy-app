import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteListHeaderComponent } from './site-list-header.component';

describe('SiteListHeaderComponent', () => {
  let component: SiteListHeaderComponent;
  let fixture: ComponentFixture<SiteListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
