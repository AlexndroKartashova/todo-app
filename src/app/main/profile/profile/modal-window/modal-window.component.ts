import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ModWindowComponent } from 'app/main/apps/todo/mod-window/mod-window.component';
import { CalendarEvent } from 'app/core/interface/calendar-utils';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent implements OnInit {

  event: CalendarEvent;

  constructor(
     public dialogRef: MatDialogRef<ModWindowComponent>, 
  )  { }

  ngOnInit() {
    this.dataProfileControl = new FormGroup({
      firstName: new FormControl(this.firstName, [
        Validators.required
      ]),
      lastName: new FormControl(this.lastName, [
        Validators.required
      ]),
      phoneNumber: new FormControl(this.phoneNumber, [
        Validators.required
      ]),
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email
      ]),
      birthday: new FormControl(this.birthday, [])
    }); 
    console.log('this.birthday',this.birthday)
  }

  public title: string;
  public firstName: any;
  public lastName: any;
  public birthday: any;
  public phoneNumber: any;
  public email: any;

  dataProfileControl: FormGroup;

  matDialogClose(): void {
    this.dialogRef.close();
  }

  separateDialCode = false;
  SearchCoubtrield = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
	preferredCountries: CountryISO[] = [CountryISO.Russia];

  // validatorsData(fGroup: FormControl) {
  //   const dateBirthday = fGroup.get('birthday').value;
  //   const date = new Date('01.01.2006');

  //   if (dateBirthday > date) {
  //     fGroup.get('birthday').setErrors( {badData: true} )

  //     let status = dateBirthday > date;
  //     console.log('dateBirthday > date', status)

  //     // console.log('data', new Date('01.01.2006'))
  //   } else return null
  //   let status = dateBirthday > date;
  //   console.log('status', status)
  //   console.log('dateBirthday > date', dateBirthday > date)
  // }
}
