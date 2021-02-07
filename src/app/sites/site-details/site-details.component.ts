import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { map, switchMap, take, tap } from 'rxjs/operators';
import { Site, SitesService } from '../sites.service';
import { DialogService } from '../../dialog/dialog.service'
import { WeatherService, WeatherResponse } from '../../weather.service'
import { ConfirmationDialogComponent } from '../../dialog/confirmation-dialog/confirmation-dialog.component';
import { DialogRef } from '../../dialog/dialog-ref';

@Component({
  selector: 'app-site-details',
  templateUrl: './site-details.component.html',
  styleUrls: ['./site-details.component.scss'],
  animations: [
    trigger('settigs', [
      state('in', style({ height: '300px', opacity: 1 })),
      transition('void => *', [style(
        { height: '0px', opacity: 0 }),
      animate('100ms ease-out')
      ]),
      transition('* => void', [
        animate(100, style({ height: '0px', opacity: 0 }))
      ])
    ])
  ]
})
export class SiteDetailsComponent implements OnInit {
  site: Site
  id: string
  dialogReference: DialogRef
  weatherData: WeatherResponse

  opened = false

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sitesService: SitesService,
    private dialogService: DialogService,
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      tap((data: Params) => this.id = data['id']),
      switchMap((data: Params) => this.sitesService.getSites()),
      map(sites => {
        return sites.find(site => site.id === this.id)
      })
    ).subscribe((site: Site) => {
      this.site = site
      this.weatherService.fetchWeatherForSite(this.site).subscribe(data => {
        this.weatherData = data
      })
    })
  }

  onEdit(): void {
    this.router.navigate(['edit'], { relativeTo: this.route })
  }
  onRemove(): void {
    this.dialogReference = this.dialogService.open(ConfirmationDialogComponent, {
      data: {
        question: 'Are you sure you want to remove this site?',
      }
    })

    this.dialogReference.afterClosed.pipe(take(1)).subscribe((answer) => {
      if (answer) {
        this.sitesService.removeSite(this.id)
        this.router.navigate(['..'], { relativeTo: this.route })
      }
    })
  }
}
