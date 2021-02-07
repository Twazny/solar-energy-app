import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radial-index',
  templateUrl: './radial-index.component.html',
  styleUrls: ['./radial-index.component.scss']
})
export class RadialIndexComponent implements OnInit {
  @Input() value: number = 0;
  @Input() title: string = 'none';
  
  radius: number = 60;
  thickness: number = 14;
  size: number = 2 * this.radius + this.thickness;

  l: number = 2 * Math.PI * this.radius;
  lBase: number = this.l/4;
  alpha: number
  lPrim: number
  color: string 

  constructor() { }

  ngOnInit(): void {
    this.recaulculate()
  }

  ngOnChanges(changes): void {
    this.recaulculate()
  }

  recaulculate(): void {
    this.alpha = this.value * 270 / 100;
    this.lPrim = this.l - (this.alpha / 360 * this.l)

    let r: number
    let g: number
    let b: number = 0;
    if (this.value < 50) {
      r = 255
      g = 255 * (this.value * 2 / 100)
    } else if (this.value > 50) {
      r = 255 -   (255 * ((this.value -50) * 2) / 100)
      g = 255
    } else {
      r = 255
      g = 255
    }
    this.color = `rgb(${r},${g},${b})`
  }
}
