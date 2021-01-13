import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-site-list-header',
  templateUrl: './site-list-header.component.html',
  styleUrls: ['./site-list-header.component.scss']
})
export class SiteListHeaderComponent implements OnInit {
  @Output('onFilter') filterEvent = new EventEmitter<string>();
  filter = null

  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event: InputEvent): void {
    this.filter = (event.target as HTMLInputElement).value
    this.notify()
  }

  onClick(): void {
    this.filter = null
    this.notify()
  }

  private notify(): void {
    this.filterEvent.emit(this.filter)
  }
}
