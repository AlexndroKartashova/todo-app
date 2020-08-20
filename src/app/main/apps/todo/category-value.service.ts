import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
