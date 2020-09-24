import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CalendarEvent } from 'app/core/interface/calendar-utils';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-add-contact-modal-window',
  templateUrl: './add-contact-modal-window.component.html',
  styleUrls: ['./add-contact-modal-window.component.scss']
})
export class AddContactModalWindowComponent implements OnInit {

  event: CalendarEvent;

  constructor(
    public dialogRef: MatDialogRef<AddContactModalWindowComponent>, 
  )  { }

  ngOnInit() {
    this.dataProfileControl = new FormGroup({
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

  dataProfileControl: FormGroup;

  separateDialCode = true;
  SearchCountryField = SearchCountryField;
	TooltipLabel = TooltipLabel;
	CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Russia];

  matDialogClose(): void {
    this.dialogRef.close();
  }

}
