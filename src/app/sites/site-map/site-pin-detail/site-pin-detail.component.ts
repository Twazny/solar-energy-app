import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../../sites.service';

@Component({
  selector: 'app-site-pin-detail',
  templateUrl: './site-pin-detail.component.html',
  styleUrls: ['./site-pin-detail.component.scss'],
  animations: [
    trigger('slideIn', [
      state('*', style({ 'transform': 'translateY(0)'  })),
      transition(':enter', [
        style({ 'transform': 'translateY(100%)' }),
        animate('200ms ease-out', style({ 'transform': 'translateY(0)' }))
      ]),
      transition(':leave', [
        style({ 'transform': 'translateY(0)' }),
        animate('200ms ease-out', style({ 'transform': 'translateY(100%)' }))
      ])
    ])
  ]
})
export class SitePinDetailComponent implements OnInit {
  @HostBinding('@slideIn') get slideIn() {return 'in'}
  @Input() site: Site

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onShowDetailsClick(): void {
    this.router.navigate([`${this.site.id}`], { relativeTo: this.route, queryParamsHandling: 'preserve' })
  }

}
