import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ItemService {

    constructor(private http: HttpClient) { }

    getAllItems(): Observable<any> {
        return this.http.get("http://localhost:58873/api/todo");
    }

    getById(id): Observable<any> {
        return this.http.get(`http://localhost:58873/api/todo/id/${id}`);
    }

    addItem(name: string, parentItemId?: string): Observable<any> {
        const body = {
          name: name,
          parentItemId: parentItemId
        }
        return this.http.post("http://localhost:58873/api/todo/add", body)    
    }

    editItem(todo): Observable<any> {
         return this.http.post("http://localhost:58873/api/todo/edit", todo)    
    }

    deleteItem(id: string): Observable<any> {
        return this.http.get(`http://localhost:58873/api/todo/${id}/delete`); 
    }

    getItems(parentItemId: string): Observable<any> {
        return this.http.get(`http://localhost:58873/api/todo/${parentItemId}`);
    }

    chengeCheckbox(todo): Observable<any> {
        return this.http.post("http://localhost:58873/api/todo/chenge_status", todo);
    }
} 