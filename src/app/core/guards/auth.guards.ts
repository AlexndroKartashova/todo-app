import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service'
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private postUser: AuthService,
    private router: Router) {}

  canActivate(): boolean {
    if (this.postUser.loggedIn()) {
      return true
    } else {
      this.router.navigate(['/auth/login']);
      return false
    }
  }
}