import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { NgxDnDModule } from '@swimlane/ngx-dnd';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';

import { TodoComponent } from 'app/main/apps/todo/todo.component';
import { TodoListItemComponent } from 'app/main/apps/todo/todo-list/todo-list-item/todo-list-item.component';
import { TodoListComponent } from 'app/main/apps/todo/todo-list/todo-list.component';
import { ItemService } from 'app/core/items/item.service';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemModWindowComponent } from './item-mod-window/item-mod-window.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ConfirmModWindComponent } from './confirm-mod-wind/confirm-mod-wind/confirm-mod-wind.component';
import { ProfileModule } from 'app/main/profile/profile.module';

const routes: Routes = [
    {
        path     : 'categories',
        component: TodoComponent
    }  ,
];

@NgModule({
    declarations: [
        TodoComponent,
        TodoListItemComponent,
        TodoListComponent,
        ItemModWindowComponent,
        ConfirmModWindComponent,
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatMenuModule,
        MatRippleModule,
        MatSelectModule,

        NgxDnDModule,

        FuseSharedModule,
        FuseSidebarModule,

        ReactiveFormsModule,
        MatToolbarModule,
        ProfileModule

    ],
    providers   : [
        ItemService
    ],
    entryComponents: [
        ItemModWindowComponent,
        ConfirmModWindComponent]
})
export class TodoModule
{
}
