import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-site-edit-header',
  templateUrl: './site-edit-header.component.html',
  styleUrls: ['./site-edit-header.component.scss']
})
export class SiteEditHeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
  }

  onBack(): void {
    this.router.navigate(['..'], { relativeTo: this.route, queryParamsHandling: 'preserve' })
  }

}
