import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { RegisterModule } from './register/register.module';
import { LoginModule } from './login/login.module';

@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        MatButtonModule,
        LoginModule,
        RegisterModule,
    ]
})
export class AuthModule
{

}
