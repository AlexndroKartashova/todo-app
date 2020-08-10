import { NgModule } from '@angular/core';
import { TodoModule } from './todo/todo.module';
import { FuseSharedModule } from '@fuse/shared.module';

@NgModule({
    imports     : [
        TodoModule,
        FuseSharedModule
    ]
})
export class AppsModule
{}
