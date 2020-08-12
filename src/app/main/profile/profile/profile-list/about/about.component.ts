import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/main/apps/todo/todo.model';
import { MatDialog } from '@angular/material/dialog';
import { ModalWindowComponent } from '../../modal-window/modal-window.component';

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
  user: User

  /**
   * Constructor
   *
   * @param {ProfileService} _profileService
   */
  constructor(
      private userService: UserService,
      public dalog: MatDialog,
    ) { }
  
  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.userService.getUserById()
        .subscribe((user) => {
            this.user = user;
            console.log('user', user)
        }, err => {})
  }


  editItem(item) {
  //   if (item.name != null) {
  //       var modalWindow = this.dalog.open(ModalWindowComponent,{
  //           panelClass: 'event-form-dialog',
  //           });

  //       modalWindow.componentInstance.title = 'Edit Category';
  //       modalWindow.componentInstance.categoryName = item.name;

  //       modalWindow.afterClosed().subscribe((data) => {
  //           if (data != null) {
  //             item.name = data.value.item;

  //               // this.itemService.editItem(category)
  //               //     .subscribe(() => { 
  //               //         this.getCategories();
  //               //     })
  //           }
  //       })
  //   }
        console.log('click', item);
  
  }

}
