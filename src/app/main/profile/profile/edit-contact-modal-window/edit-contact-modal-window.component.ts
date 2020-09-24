import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-edit-contact-modal-window',
  templateUrl: './edit-contact-modal-window.component.html',
  styleUrls: ['./edit-contact-modal-window.component.scss']
})
export class EditContactModalWindowComponent implements OnInit {

    constructor(
      public dialogRef: MatDialogRef<EditContactModalWindowComponent>, 
  )  { }

  ngOnInit() {
    this.dataContactControl = new FormGroup({
      name: new FormControl(this.name, [
        Validators.required
      ]),
      phoneNumber: new FormControl(this.phoneNumber, [
        Validators.required
        ]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email
      ])
    });
  }

  public title: string;
  public name: any;
  public phoneNumber: any;
  public email: any;
  public selectedCountryISO: any;
  
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Russia];

  dataContactControl: FormGroup;

  matDialogClose(): void {
    this.dialogRef.close();
  }

}
