import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(): Observable<any> {
    return this.http.get("http://localhost:58874/api/profile");
  }
  editUser(user): Observable<any> {
    // const user = {
    //   firstName: firstName,
    //   lastName: lastName,
    //   birthday: birthday
    // }
    return this.http.post("http://localhost:58874/api/profile/edit", user)    
  }
}
