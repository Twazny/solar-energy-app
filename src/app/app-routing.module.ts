import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteDetailsComponent } from './site-details/site-details.component';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { SiteListComponent } from './site-list/site-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/sites', pathMatch: 'full' },
  {
    path: 'sites', children: [
      { path: '', component: SiteListComponent, data: { animation: 'sitesView' }, pathMatch: 'full' },
      { path: 'new', component: SiteEditComponent, data: { animation: 'newSiteView' } },
      { path: ':id', component: SiteDetailsComponent, data: { animation: 'siteDetailsView' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
