import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations   : fuseAnimations
})
export class ProfileComponent implements OnInit {

  selectedItem: number = 3;

  constructor(
    
  ) { }

  ngOnInit() {

  }

  selectGeneralInformation() {
    this.selectedItem = 1;
  }

  selectContactsInformation() {
    this.selectedItem = 2;
  }

  selectGalalry() {
    this.selectedItem = 3;
  }
  
}
