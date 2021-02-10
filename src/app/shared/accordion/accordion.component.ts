import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('slideIn', [
      state('in', style({ height: 'auto', opacity: 1 })),
      transition('void => *', [style(
        { height: '0px', opacity: 0 }),
      animate('100ms ease-out')
      ]),
      transition('* => void', [
        animate(100, style({ height: '0px', opacity: 0 }))
      ])
    ]),
    trigger('rotate', [
      state('collapsed', style({ transform: 'rotate(0)' })),
      state('open', style({ transform: 'rotate(90deg)' })),
      transition('collapsed <=> open', animate(100))
    ])
  ]
})
export class AccordionComponent implements OnInit {
  @Input() title = 'Title'
  @Input() canCollapse = true
  collapsed = false

  constructor() { }

  ngOnInit(): void {
  }
}
