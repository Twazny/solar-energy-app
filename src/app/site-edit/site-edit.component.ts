import { ReadVarExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Site, SitesService } from '../sites.service';

@Component({
  selector: 'app-site-edit',
  templateUrl: './site-edit.component.html',
  styleUrls: ['./site-edit.component.scss']
})
export class SiteEditComponent implements OnInit {
  photoUrl: string
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    location: new FormGroup({
      latitude: new FormControl(0, [Validators.required, Validators.max(90), Validators.min(-90)]),
      longitude: new FormControl(0, [Validators.required, Validators.max(180), Validators.min(-180)])
    })
  })

  constructor(
    private router: Router,
    private siteService: SitesService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.form.valid) {
      return
    }
    console.log(this.form.value)
    this.siteService.addSite((this.form.value as Site))
    this.router.navigate(['sites'])
  }

  onFileUpload(event: InputEvent): void {
    const file = (event.target as HTMLInputElement).files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      this.photoUrl = e.target.result as string
    }
  }
}