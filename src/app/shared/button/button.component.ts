import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() text = 'click me'
  @Input() light = false
  @Input() submit = false
  @Input() disabled = false

  constructor() { }

  ngOnInit(): void {
  }

}
