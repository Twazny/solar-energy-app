import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../sites.service';

@Component({
  selector: 'app-site-list-item',
  templateUrl: './site-list-item.component.html',
  styleUrls: ['./site-list-item.component.scss']
})
export class SiteListItemComponent implements OnInit {
  @Input() site: Site

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  onClick(): void {
    this.router.navigate([this.site.id], { relativeTo: this.activatedRoute, queryParamsHandling: 'preserve' })
  }

}
