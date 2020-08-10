import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { fuseAnimations } from '@fuse/animations';
import { AuthService } from 'app/core/auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector     : 'register',
    templateUrl  : './register.component.html',
    styleUrls    : ['./register.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class RegisterComponent implements OnInit
{
    constructor( 
      private httpService: AuthService,
      private router: Router,) {}

    ngOnInit(): void {}

    confirmPasswordValidator(fGroup: FormControl) {
        const password = fGroup.get('password').value;
        const confirmPassword = fGroup.get('confirmPassword').value;
    
        if (password !== confirmPassword) {
          fGroup.get('confirmPassword').setErrors( {mismatch: true} )
        } else {
          return null
        }
      }
    
      dataFormGroupControl = new FormGroup({
        email: new FormControl('', [
          Validators.minLength(4), 
          Validators.email
        ]),
        password: new FormControl('', [
          Validators.minLength(6), 
          //pattern
        ]),
        confirmPassword: new FormControl('', [])
      },{
          validators: this.confirmPasswordValidator
        }
      ); 
    
      addUser = () => {
        var value = this.dataFormGroupControl.getRawValue();
    
        this.httpService.postUserRegister(value.email, value.password, value.confirmPassword).subscribe(res => {
          localStorage.setItem('encodedJwt', res.encodedJwt);
          localStorage.setItem('expiredDate', res.expiredDate);
          this.router.navigate(['/todo/categories']);
        });
      }
};
