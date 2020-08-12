import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ModWindowComponent } from 'app/main/apps/todo/mod-window/mod-window.component';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  ngOnInit() {
    this.itemControl = new FormGroup({
      item: new FormControl(this.categoryName, [
        Validators.required
      ]) 
    }); 
  }

  public title: string;
  public categoryName: any;

  itemControl: FormGroup;

  /**
     * Constructor
     *
     * @param {MatDialogRef<CalendarEventFormDialogComponent>} matDialogRef
     */
    constructor(
      @Inject(MAT_DIALOG_DATA) private _data: any,
      public dialogRef: MatDialogRef<ModWindowComponent>, 
  )  { }

  matDialogClose(): void {
    this.dialogRef.close();
  }

}
