import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { InsertionDirective } from './insertion.directive';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [DialogComponent, InsertionDirective, ConfirmationDialogComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DialogModule { }
