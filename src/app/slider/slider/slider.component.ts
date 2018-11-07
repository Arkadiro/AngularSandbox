import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { DragScrollComponent } from 'ngx-drag-scroll/lib';


@Component({
  selector: 'app-sample',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  slides = [];

  @ViewChild('nav', { read: DragScrollComponent }) ds: DragScrollComponent;

  constructor(
  ) { }

  ngOnInit() {
    for (let i = 1; i <= 3; i++) {
      this.slides.push(`https://k5x5n5g8.ssl.hwcdn.net/content/181104/0005-0${i}.jpg`)
    }
    for (let i = 1; i <= 3; i++) {
      this.slides.push(`https://k5x5n5g8.ssl.hwcdn.net/content/181104/0005-0${i}.jpg`)
    }
    //console.log(this.slides)
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }
  clickItem(item) {
    console.log('item clicked');
  }

}
