import { NgModule } from '@angular/core';
import { FuseSidebarModule } from '@fuse/components';
import { ProfileUserModule } from './profile/profileUser.module';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'app/layout/components/header/header.module';


@NgModule({
  imports: [ 
    RouterModule,
    ProfileUserModule,
    FuseSidebarModule,
    HeaderModule
  ]
})
export class ProfileModule { }
