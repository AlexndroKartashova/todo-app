import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { ProfileComponent } from './profile.component';
import { ProfileAboutComponent } from './profile-list/about/about.component';
import { RouterModule } from '@angular/router';
import { HeaderModule } from 'app/layout/components/header/header.module';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes = [
  {
      path     : '',
      component: ProfileComponent
  }
];

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileAboutComponent,
    ProfileListComponent,
    ModalWindowComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    NgxDnDModule,
    
    FuseSharedModule,
    FuseSidebarModule,

    MatToolbarModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    HeaderModule,
    RouterModule,
    MatFormFieldModule    
  ],
  entryComponents: [
    ModalWindowComponent
  ]
})
export class ProfileUserModule { }
