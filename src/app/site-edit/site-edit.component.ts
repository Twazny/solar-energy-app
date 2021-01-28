import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { LocationService, GeolocationPosition } from '../location.service';
import { Site, SitesService } from '../sites.service';

@Component({
  selector: 'app-site-edit',
  templateUrl: './site-edit.component.html',
  styleUrls: ['./site-edit.component.scss']
})
export class SiteEditComponent implements OnInit {
  photoUrl: string
  form: FormGroup


  constructor(
    private router: Router,
    private siteService: SitesService,
    private locationService: LocationService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      photo: new FormControl(''),
      location: new FormGroup({
        latitude: new FormControl(null, [Validators.required, Validators.max(90), Validators.min(-90)]),
        longitude: new FormControl(null, [Validators.required, Validators.max(180), Validators.min(-180)])
      })
    })
  }

  ngOnDestroy(): void {

  }

  onSubmit(): void {
    if (!this.form.valid) {
      return
    }
    if (!this.form.value.photo) {
      this.form.value.photo = 'https://www.oferty-biznesowe.pl/media/thumbnail/company/10294039.jpg'
    }
    this.siteService.addSite((this.form.value as Site))
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
}