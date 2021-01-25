import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Site, SitesService } from '../sites.service';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss']
})
export class SiteDetailsComponent implements OnInit {
  site: Site
  id: string

  constructor(
    private activatedRoute: ActivatedRoute,
    private sitesService: SitesService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      tap((data: Params) => this.id = data['id']),
      switchMap((data: Params) => this.sitesService.getSites()),
      // take(1),
      map(sites => {
        return sites.find(site => site.id === this.id)
      })
    ).subscribe((site: Site) => this.site = site)
  }
}
