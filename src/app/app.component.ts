import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { PrintService } from './print.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
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
