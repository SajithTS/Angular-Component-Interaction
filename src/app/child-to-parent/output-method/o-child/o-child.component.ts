import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-o-child',
  templateUrl: './o-child.component.html'
})
export class OChildComponent implements OnInit {
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  callParent(msg){
    this.messageEvent.emit(msg);
  }

}
