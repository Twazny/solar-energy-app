import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Site, SitesService } from '../sites.service'


@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
})
export class SiteListComponent implements OnInit {
  mapMode = false
  filter = ''
  sitesSubs: Subscription
  sites: Site[] = []


  constructor(
    private sitesService: SitesService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.mapMode = params['map'] ? (params['map'] === 'true') : false
    })

    this.sitesSubs = this.sitesService.getSites().subscribe(sites => {
      this.sites = sites
    })
  }

  onFilter(filter: string): void {
    this.filter = filter
  }

  onAdd(): void {
    this.router.navigate(['sites/new'], { queryParamsHandling: 'preserve' })
  }

  onModeToggle(): void {
    this.mapMode = !this.mapMode
    const params = {
      map: this.mapMode
    }

    this.router.navigate([], { relativeTo: this.route, queryParams: params })
  }
}


