import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardinalDirectionsPipe } from './cardinal-directions.pipe';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    CardinalDirectionsPipe,
    ButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardinalDirectionsPipe,
    ButtonComponent
  ]
})
export class SharedModule { }
