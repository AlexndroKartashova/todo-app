import { NgModule } from '@angular/core';
import { FuseSidebarModule } from '@fuse/components';
import { ProfileUserModule } from './profile/profileUser.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [ 
    RouterModule,
    ProfileUserModule ,
    FuseSidebarModule,
  ]
})
export class ProfileModule { }
