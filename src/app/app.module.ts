import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import '@angular/common/locales/global/pl'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentweatherComponent } from './currentweather/currentweather.component';
import { SiteListComponent } from './site-list/site-list.component';
import { SiteListItemComponent } from './site-list-item/site-list-item.component';
import { SiteListHeaderComponent } from './site-list-header/site-list-header.component';
import { FilterSitesPipe } from './filter-sites.pipe';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { SiteEditHeaderComponent } from './site-edit-header/site-edit-header.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CurrentweatherComponent,
    SiteListComponent,
    SiteListItemComponent,
    SiteListHeaderComponent,
    FilterSitesPipe,
    SiteEditComponent,
    SiteEditHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
