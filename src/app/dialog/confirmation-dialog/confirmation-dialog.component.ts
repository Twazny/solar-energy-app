import { Component, Input, OnInit } from '@angular/core';
import { DialogRef } from '../dialog-ref';
import { DialogConfig } from '../dialog.config';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  question: string
  yesLabel: string
  noLabel: string

  constructor(
    public config: DialogConfig,
    public dialog: DialogRef
  ) {
    this.question = this.config.data.question
    this.yesLabel = this.config.data.yesLabel || 'yes'
    this.noLabel = this.config.data.noLabel || 'no'
  }

  ngOnInit(): void {
  }

  onClose(confirmation: boolean): void {
    this.dialog.close(confirmation)
  }

}
