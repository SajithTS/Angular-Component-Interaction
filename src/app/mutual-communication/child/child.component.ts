import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit {
  message:string;
  constructor(private ser:CommunicationService) { }

  ngOnInit() {
    this.ser.currentMessage.subscribe(msg => this.message = msg);
  }

  set(msg){
    this.ser.changeMessage(msg);
  }

}
