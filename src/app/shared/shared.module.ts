import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardinalDirectionsPipe } from './cardinal-directions.pipe';
import { ButtonComponent } from './button/button.component';
import { IconButtonComponent } from './icon-button/icon-button.component';
import { RadialIndexComponent } from './radial-index/radial-index.component';
import { AccordionComponent } from './accordion/accordion.component';
import { LoaderComponent } from './loader/loader.component';
import { BackHeaderComponent } from './back-header/back-header.component'


@NgModule({
  declarations: [
    CardinalDirectionsPipe,
    ButtonComponent,
    IconButtonComponent,
    RadialIndexComponent,
    AccordionComponent,
    LoaderComponent,
    BackHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardinalDirectionsPipe,
    ButtonComponent,
    IconButtonComponent,
    RadialIndexComponent,
    AccordionComponent,
    LoaderComponent,
    BackHeaderComponent
  ]
})
export class SharedModule { }
