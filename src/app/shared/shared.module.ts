import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardinalDirectionsPipe } from './cardinal-directions.pipe';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';


@NgModule({
  declarations: [
    CardinalDirectionsPipe,
    ButtonComponent,
    IconButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardinalDirectionsPipe,
    ButtonComponent,
    IconButtonComponent
  ]
})
export class SharedModule { }