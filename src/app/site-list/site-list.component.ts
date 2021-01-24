import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Site, SitesService } from '../sites.service'


@Component({
  selector: 'app-site-list',
  templateUrl: './site-list.component.html',
  styleUrls: ['./site-list.component.scss'],
  // animations: [
  //   trigger('slideIn', [
  //     state('in', style({
  //       'transform': 'translateX(0)'
  //     }))
  //   ]),
  //   transition('void <=> *', [style({ 'transform': 'translateX(-50vw)' }), animate(500)])
  // ]
})
export class SiteListComponent implements OnInit {

  // @HostBinding('@slideIn') get state(): string { return 'in' }

  filter = ''
  sitesSubs: Subscription
  sites: Site[] = []

  constructor(
    private sitesService: SitesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.sitesSubs = this.sitesService.getSites().subscribe(sites => {
      this.sites = sites
    })
  }

  onFilter(filter: string): void {
    this.filter = filter
  }

  onAdd(): void {
    this.router.navigate(['sites/new'])
  }

}


