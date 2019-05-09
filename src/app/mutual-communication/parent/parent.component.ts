import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/communication.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
})
export class ParentComponent implements OnInit {
  message:string;
  constructor(private ser:CommunicationService) { }

  ngOnInit() {
    this.ser.currentMessage.subscribe(msg => this.message = msg);
  }

  set(msg){
    this.ser.changeMessage(msg);
  }

}
