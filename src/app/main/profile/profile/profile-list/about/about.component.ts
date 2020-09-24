import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/core/user/user.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from '../../modal-window/modal-window.component';
import { User } from 'app/core/interface/models.model';

@Component({
    selector     : 'profile-about',
    templateUrl  : './about.component.html',
    styleUrls    : ['./about.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ProfileAboutComponent implements OnInit
{
  about: any;
  user: User;

  /**
   * Constructor
   *
   * @param {ProfileService} _profileService
   */
  constructor(
      private userService: UserService,
      public dalog: MatDialog
    ) { }
  
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById()
        .subscribe((user) => {
            this.user = user;
        }, err => {})
  }


  editItem() {
    if (this.user != null) {
        var modalWindow = this.dalog.open(ModalWindowComponent,{
            panelClass: 'event-form-dialog',
            });

        modalWindow.componentInstance.title = 'Edit General Information';
        modalWindow.componentInstance.firstName = this.user.firstName;
        modalWindow.componentInstance.lastName = this.user.lastName;
        modalWindow.componentInstance.birthday = this.user.birthday;
        modalWindow.componentInstance.phoneNumber = this.user.phoneNumber;
        modalWindow.componentInstance.email = this.user.email;
        modalWindow.componentInstance.selectedCountryISO = this.user.countryISO;

        modalWindow.afterClosed().subscribe((data) => {
            if (data != null) {
              this.user.firstName = data.value.firstName;
              this.user.lastName = data.value.lastName;
              this.user.birthday = data.value.birthday;
              this.user.phoneNumber = data.value.phoneNumber.number;
              this.user.countryCode = data.value.phoneNumber.dialCode;
              this.user.countryISO = data.value.phoneNumber.countryCode.toLowerCase();
              this.user.email = data.value.email;

              this.userService.editUser(this.user)
                    .subscribe(() => { 
                      this.getUser();
                    })
            }
        })
    }
  }

}
