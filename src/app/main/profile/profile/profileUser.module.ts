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
import { ProfileAboutComponent } from './tabs/about/about.component';
import { RouterModule } from '@angular/router';

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
  ]
})
export class ProfileUserModule { }
