import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as moment from 'moment'; 

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private router: Router
        ) { }

    postUserRegister(email: string, password: string, confirmPassword: string): Observable<any> {
        const body = {
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }
         return this.http.post("http://localhost:58873/api/auth/register", body)    
    }

    postUserLogin(email: string, password: string): Observable<any> {
        const body = {
            email: email,
            password: password
        }
         return this.http.post("http://localhost:58873/api/auth/login", body)    
    }

    loggedIn() {
        return !!localStorage.getItem('encodedJwt');
    }

    getToken() {
        const expired = localStorage.getItem('expiredDate');
        var date = new Date(expired);
        
        if (date <= new Date()) {
            this.deleteToken();
            this.router.navigate(['/auth/login']);
        } 
        return localStorage.getItem('encodedJwt'); 
    }

    deleteToken() { 
        localStorage.removeItem('encodedJwt');
        localStorage.removeItem('expiredDate');
    }

    logOut() {
        this.deleteToken();
        this.router.navigate(['/auth/login'])
    }
} 