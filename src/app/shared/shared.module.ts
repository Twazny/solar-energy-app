import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardinalDirectionsPipe } from './cardinal-directions.pipe';


@NgModule({
  declarations: [
    CardinalDirectionsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardinalDirectionsPipe
  ]
})
export class SharedModule { }
