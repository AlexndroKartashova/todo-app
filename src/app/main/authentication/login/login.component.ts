import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { Router } from '@angular/router';
import { AuthService } from 'app/core/auth/auth.service';

@Component({
    selector     : 'login',
    templateUrl  : './login.component.html',
    styleUrls    : ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class LoginComponent implements OnInit
{
    loginForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private httpService: AuthService,
        private router: Router,
        private _fuseConfigService: FuseConfigService,
    )
    {
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
                    hidden: true
                },
                sidepanel: {
                    hidden: true
                }
            }
        };
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void { }

    dataFormGroupControl = new FormGroup({
        email: new FormControl('', [
          Validators.required,
          Validators.minLength(4), 
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6), 
          //pattern
        ])
      });
    
    loginUser = () => {
        var value = this.dataFormGroupControl.getRawValue();

        this.httpService.postUserLogin(value.email, value.password).subscribe(res => {
        localStorage.setItem('encodedJwt', res.encodedJwt);
        localStorage.setItem('expiredDate', res.expiredDate);
        this.router.navigate(['/todo/categories']);      
        });
    }
}
