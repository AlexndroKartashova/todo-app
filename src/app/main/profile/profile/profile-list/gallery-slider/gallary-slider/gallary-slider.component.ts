import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary-slider',
  templateUrl: './gallary-slider.component.html',
  styleUrls: ['./gallary-slider.component.scss']
})
export class GallarySliderComponent implements OnInit {

  images = [
    {path: '../../../../../../../assets/pictures/pic1.gif'},
    {path: '../../../../../../../assets/pictures/pic2.gif'},
    {path: '../../../../../../../assets/pictures/pic3.gif'},
    {path: '../../../../../../../assets/pictures/pic4.gif'},
    {path: '../../../../../../../assets/pictures/pic5.gif'},
    {path: '../../../../../../../assets/pictures/pic6.gif'},
  ]
  constructor() { }

  ngOnInit() {
  }

  // clickLeftArrow() {
  //   console.log('click');
  // }

  // clickRightArrow() {
  //   console.log('click2');
  // }
}
