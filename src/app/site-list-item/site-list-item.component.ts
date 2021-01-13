import { Component, Input, OnInit } from '@angular/core';
import { Site } from '../sites.service';

@Component({
  selector: 'app-site-list-item',
  templateUrl: './site-list-item.component.html',
  styleUrls: ['./site-list-item.component.scss']
})
export class SiteListItemComponent implements OnInit {
  @Input() site: Site

  constructor() { }

  ngOnInit(): void {
  }

}
