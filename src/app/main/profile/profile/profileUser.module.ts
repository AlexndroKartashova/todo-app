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
import { MatInputModule } from '@angular/material/input';
import { ContactsContactListComponent } from './profile-list/contact-list/contact-list.component';
import { MatTableModule } from '@angular/material/table';
import { AddContactModalWindowComponent } from './add-contact-modal-window/add-contact-modal-window.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { EditContactModalWindowComponent } from './edit-contact-modal-window/edit-contact-modal-window.component';
import { ConfirmModWindComponent } from './confirm-mod-wind/confirm-mod-wind.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { GallarySliderComponent } from './profile-list/gallery-slider/gallary-slider/gallary-slider.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';

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
    ContactsContactListComponent,
    AddContactModalWindowComponent,
    EditContactModalWindowComponent,
    ConfirmModWindComponent,
    GallarySliderComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    NgxIntlTelInputModule,
    CommonModule,
    NgxDnDModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    
    FuseSharedModule,
    FuseSidebarModule,

    MatToolbarModule,

    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTabsModule,
    HeaderModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatMenuModule,

    IvyCarouselModule
  ],
  entryComponents: [
    ModalWindowComponent,
    AddContactModalWindowComponent,
    EditContactModalWindowComponent,
    ConfirmModWindComponent,
  ]
})
export class ProfileUserModule { }
