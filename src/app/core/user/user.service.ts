import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserById(): Observable<any> {
    return this.http.get("http://localhost:58873/api/profile");
  }
  editUser(todo): Observable<any> {
      return this.http.post("http://localhost:58873/api/todo/edit", todo)    
  }
}
