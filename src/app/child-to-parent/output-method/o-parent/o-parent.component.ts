import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-o-parent',
  templateUrl: './o-parent.component.html'
})
export class OParentComponent implements OnInit {

  constructor() { }
  message:string;
  ngOnInit() {
  }

  receiveChildCall(event){
    this.message = event;
  }

}
