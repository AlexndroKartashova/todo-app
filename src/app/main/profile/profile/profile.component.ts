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

  selectedItem: number;

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
  
}
