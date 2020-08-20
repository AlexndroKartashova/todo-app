import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PofileService {

  generalInformation: BehaviorSubject<any>;
  contacts: BehaviorSubject<any>;

  constructor() { 
    this.generalInformation = new BehaviorSubject(null);
    this.contacts = new BehaviorSubject(null);
  }
}

