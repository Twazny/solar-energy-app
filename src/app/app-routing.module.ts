import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteEditComponent } from './site-edit/site-edit.component';
import { SiteListComponent } from './site-list/site-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/sites', pathMatch: 'full'},
  {path: 'sites', children: [
    {path: 'new', component: SiteEditComponent},
    {path: '', component: SiteListComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
