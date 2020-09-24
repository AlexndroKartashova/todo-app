import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get("http://localhost:58874/api/contacts");
  }

  addContact(name: string, email?: string, phoneNumber?: string, countryISO?: string, countryCode?: string): Observable<any> {
    const body = {
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      countryCode: countryCode,
      countryISO: countryISO
    }
    return this.http.post("http://localhost:58874/api/contacts/add", body);
  }
  
  editContact(contact): Observable<any> {
    return this.http.post("http://localhost:58874/api/contacts/edit", contact)    
  }

  deleteContact(id: string): Observable<any> {
    return this.http.get(`http://localhost:58874/api/contacts/${id}/delete`); 
  }

  getById(id): Observable<any> {
    return this.http.get(`http://localhost:58874/api/contacts/${id}`);
  }
}
