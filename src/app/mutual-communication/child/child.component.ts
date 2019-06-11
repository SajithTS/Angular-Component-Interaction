import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/communication.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  message:string;
  constructor(private ser:CommunicationService) { }

  ngOnInit() {
    this.ser.currentMessage.subscribe(msg => {
      this.message = msg;
      if(msg == 'call'){
        this.openAlert();
      }
    });
  }

  set(msg){
    this.ser.changeMessage(msg);
  }
  
  openAlert(){
    alert('This is from CHILD component.This alert is popup due to change of shared variable in PARENT component.')
  }

}
