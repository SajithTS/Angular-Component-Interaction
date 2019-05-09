import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {
  parentMessage="";
  constructor() { }

  ngOnInit() {
  }

  callChild(msg){
    this.parentMessage = msg;
  }

}
