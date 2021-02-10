import { Component, Host, HostBinding, Input, OnInit } from '@angular/core';

export enum ColorScheme {
  primary, secondary, white, transparent
}

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string
  @Input() colorScheme:
    'primary' |
    'secondary' |
    'white' |
    'transparent' |
    'transparent-dark' = 'primary'
  @Input() title: string

  @Input()
  @HostBinding('style.--size')
  size = '3rem'

  colorSchemeEnum = ColorScheme

  constructor() { }

  get classConfig() {
    return {
      'button-primary': this.colorScheme === 'primary',
      'button-secondary': this.colorScheme === 'secondary',
      'button-transparent': this.colorScheme === 'transparent',
      'button-transparent-dark': this.colorScheme === 'transparent-dark',
    }
  }

  ngOnInit(): void {
  }
}
