import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardinalDirectionsPipe } from './cardinal-directions.pipe';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { RadialIndexComponent } from './radial-index/radial-index.component'


@NgModule({
  declarations: [
    CardinalDirectionsPipe,
    ButtonComponent,
    IconButtonComponent,
    RadialIndexComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardinalDirectionsPipe,
    ButtonComponent,
    IconButtonComponent,
    RadialIndexComponent
  ]
})
export class SharedModule { }
