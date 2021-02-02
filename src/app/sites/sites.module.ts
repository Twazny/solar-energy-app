import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DialogModule } from '../dialog/dialog.module'
import { SharedModule } from '../shared/shared.module'

import { SiteListComponent } from './site-list/site-list.component';
import { SiteListItemComponent } from './site-list-item/site-list-item.component';
import { SiteListHeaderComponent } from './site-list-header/site-list-header.component';
import { FilterSitesPipe } from './filter-sites.pipe';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { SiteEditHeaderComponent } from './site-edit-header/site-edit-header.component';
import { SiteDetailsComponent } from './site-details/site-details.component';

@NgModule({
  declarations: [
    SiteListComponent,
    SiteListItemComponent,
    SiteListHeaderComponent,
    SiteEditComponent,
    SiteEditHeaderComponent,
    SiteDetailsComponent,
    FilterSitesPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DialogModule,
    SharedModule,
  ]
})
export class SitesModule { }
