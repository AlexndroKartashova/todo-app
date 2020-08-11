import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
// import {MatSnackBar, MatToolbarModule} from '@angular/material';
import { NgxDnDModule } from '@swimlane/ngx-dnd';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';
import { ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarHorizontalStyle1Module } from '../navbar/horizontal/style-1/style-1.module';
import { NavbarVerticalStyle2Module } from '../navbar/vertical/style-2/style-2.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatIconModule,
    MatMenuModule,

    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    MatRippleModule,
    MatSelectModule,
    // MatSnackBar,

    NgxDnDModule,

    FuseSharedModule,
    FuseSidebarModule,

    ReactiveFormsModule,
    MatToolbarModule,

    NavbarHorizontalStyle1Module,
    NavbarHorizontalStyle1Module,
    NavbarVerticalStyle2Module
  ],
  exports     : [
    HeaderComponent
]
})
export class HeaderModule { }
