import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

import { FuseModule } from '@fuse/fuse.module';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from '@fuse/components';

import { fuseConfig } from 'app/fuse-config';

import { AppComponent } from 'app/app.component';
import { AppStoreModule } from 'app/store/store.module';
import { LayoutModule } from 'app/layout/layout.module';
import { AuthService } from './core/auth/auth.service';
import { ItemService } from './core/items/item.service';
import { AuthInterceptor } from './core/auth/auth.interceptor';
import { AuthGuard } from './core/guards/auth.guards';
import { TodoService } from './main/apps/todo/todo.service';

const appRoutes: Routes = [
    {
        path        : 'todo', 
        loadChildren: () => import('./main/apps/apps.module').then(m => m.AppsModule),
        canActivate: [ AuthGuard ]
    },
    {
        path        : 'auth',
        loadChildren: () => import('./main/authentication/auth.module').then(m => m.AuthModule)
    },
    {
        path        : 'profile',
        loadChildren: () => import('./main/profile/profile.module').then(m => m.ProfileModule)
    },
    {   
        path: "**",
        redirectTo:"/todo/categories",
        pathMatch: "full"
    }
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports     : [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        // App modules
        LayoutModule,
        AppStoreModule,
    ],
    bootstrap   : [
        AppComponent
    ],
    providers: [
        AuthService,
        ItemService,
        AuthGuard,
        TodoService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        }
    ]
})
export class AppModule
{
}
