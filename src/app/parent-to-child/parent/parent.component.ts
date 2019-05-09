import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.sass']
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
