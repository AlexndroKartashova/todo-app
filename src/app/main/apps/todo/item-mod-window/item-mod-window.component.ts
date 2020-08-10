import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-item-mod-window',
  templateUrl: './item-mod-window.component.html',
  styleUrls: ['./item-mod-window.component.scss']
})
export class ItemModWindowComponent implements OnInit {

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
      public dialogRef: MatDialogRef<ItemModWindowComponent>, 
  )  { }

  matDialogClose(): void {
    this.dialogRef.close();
  }

}
