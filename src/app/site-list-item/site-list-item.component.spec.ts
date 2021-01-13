import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteListItemComponent } from './site-list-item.component';

describe('SiteListItemComponent', () => {
  let component: SiteListItemComponent;
  let fixture: ComponentFixture<SiteListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
