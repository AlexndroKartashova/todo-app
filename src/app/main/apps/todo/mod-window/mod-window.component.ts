import { Component, OnInit} from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mod-window',
  templateUrl: './mod-window.component.html',
  styleUrls: ['./mod-window.component.scss']
})
export class ModWindowComponent implements OnInit {

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
      public dialogRef: MatDialogRef<ModWindowComponent>, 
  )  { }

  matDialogClose(): void {
    this.dialogRef.close();
  }

}
