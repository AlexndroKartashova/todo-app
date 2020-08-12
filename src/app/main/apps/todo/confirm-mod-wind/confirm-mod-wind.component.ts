import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-mod-wind',
  templateUrl: './confirm-mod-wind.component.html',
  styleUrls: ['./confirm-mod-wind.component.scss']
})
export class ConfirmModWindComponent implements OnInit {

  public confirmMessage: string;

  /**
   * Constructor
   *
   * @param {MatDialogRef<FuseConfirmDialogComponent>} dialogRef
   */
  constructor(
      public dialogRef: MatDialogRef<ConfirmModWindComponent>
  )
  { }

  ngOnInit() {
  }

}
