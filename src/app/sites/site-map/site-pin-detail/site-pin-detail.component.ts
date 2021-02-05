import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../../sites.service';

@Component({
  selector: 'app-site-pin-detail',
  templateUrl: './site-pin-detail.component.html',
  styleUrls: ['./site-pin-detail.component.scss'],
  animations: [
    trigger('slideIn', [
      state('in', style({ transform: 'translateY(0)' })),
      transition('void => *', [style(
        { transform: 'translateY(100%)' }),
      animate('200ms ease-out')
      ]),
      transition('* => void', [
        animate(100, style({ transform: 'translateY(100%)' }))
      ])
    ])
  ]
})
export class SitePinDetailComponent implements OnInit {
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
