import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { fuseAnimations } from '@fuse/animations';
import { UserService } from 'app/core/user/user.service';
import { User } from 'app/main/apps/todo/todo.model';
// import { ProfileService } from 'app/main/pages/profile/profile.service';

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
        private userService: UserService
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
}
