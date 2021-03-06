import { ReadVarExpr } from '@angular/compiler';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { of, Subscription, throwError } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';
import { LocationService, GeolocationPosition } from '../../location.service';
import { Site, SitesService } from '../sites.service';

@Component({
  selector: 'app-site-edit',
  templateUrl: './site-edit.component.html',
  styleUrls: ['./site-edit.component.scss']
})
export class SiteEditComponent implements OnInit {
  @ViewChild('fileInput') fileInput: ElementRef

  photoUrl: string
  form: FormGroup
  id: string
  site: Site

  selectOnMap = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private siteService: SitesService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.route.params.pipe(
      tap((data: Params) => {
        this.id = data['id']
      }),
      switchMap((data: Params) => {
        if (this.id) {
          return this.siteService.getSites()
        } else {
          return throwError("not in edit mode")
        }
      }),
      map(sites => {
        return sites.find(site => site.id === this.id)
      }),
      catchError(error => {
        return of(null);
      })
    ).subscribe((site: Site) => {
      this.site = site
      this.initForm()
    })

  }

  ngOnDestroy(): void {

  }

  private initForm(): void {
    const name = this.site?.name || ''
    const address = this.site?.address || ''
    const photo = this.site?.photo || ''
    this.photoUrl = photo
    const lat = this.site?.location.latitude || null
    const lng = this.site?.location.longitude || null

    this.form = new FormGroup({
      name: new FormControl(name, Validators.required),
      address: new FormControl(address, Validators.required),
      photo: new FormControl(photo),
      location: new FormGroup({
        latitude: new FormControl(lat, [Validators.required, Validators.max(90), Validators.min(-90)]),
        longitude: new FormControl(lng, [Validators.required, Validators.max(180), Validators.min(-180)])
      })
    })
  }

  onUploadClick(): void {
    if (!this.photoUrl) {
      this.fileInput.nativeElement.click()
    }
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return
    }
    const formValue = this.form.value as Site

    formValue.location.longitude = +formValue.location.longitude;
    formValue.location.latitude = +formValue.location.latitude;

    if (this.id) {
      this.siteService.updateSite(this.id, formValue)
    } else {
      this.siteService.addSite(formValue)
    }
    this.router.navigate(['sites'])
  }

  onFileUpload(event: InputEvent): void {
    const file = (event.target as HTMLInputElement).files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      this.photoUrl = e.target.result as string
      this.form.patchValue({
        photo: this.photoUrl
      })
    }
  }

  onPhotoRemove(event: MouseEvent): void {
    event.stopPropagation()
    this.photoUrl = null
    this.form.patchValue({
      photo: null
    })

  }

  onUseMyLocation(): void {
    this.locationService.getCurrentLocation().then(obs => {
      obs.pipe(take(1)).subscribe(myLocation => {
        this.form.patchValue({
          location: {
            latitude: myLocation.coords.latitude.toFixed(6),
            longitude: myLocation.coords.longitude.toFixed(6)
          }
        })
      })
    }).catch(error => {
      console.log('componentError', error)
    })
  }

  onCoordinatesSelected(event: L.LatLng): void {
    this.form.patchValue({
      location: {
        latitude: event.lat.toFixed(6),
        longitude: event.lng.toFixed(6)
      }
    })
    this.selectOnMap = false
  }
}