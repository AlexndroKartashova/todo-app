import { NgModule } from '@angular/core';
import { TodoModule } from './todo/todo.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { HeaderModule } from 'app/layout/components/header/header.module';

@NgModule({
    imports     : [
        TodoModule,
        FuseSharedModule,
        HeaderModule,
    ],
})
export class AppsModule
{}
