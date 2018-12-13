import { Component, OnInit } from '@angular/core';
import { PrintService } from 'src/app/print.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angularSendbox';
  age = 30;

  constructor( private printService: PrintService) {}

  ngOnInit(){
    this.printService.onPrint(this.title)
  }

  hasBirthday() {
    this.age ++;
    this.title="Angular"
  }
}
