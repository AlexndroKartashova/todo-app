import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryValueService {

  onItemChanged: BehaviorSubject<any>;
  countCategoryChange: BehaviorSubject<any>;
  // countChildrenChange: BehaviorSubject<any>;

  constructor() { 
    this.onItemChanged = new BehaviorSubject(null);
    this.countCategoryChange = new BehaviorSubject(null);
    // this.countChildrenChange = new BehaviorSubject(null);
  }
}
