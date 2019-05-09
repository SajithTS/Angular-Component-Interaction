import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent implements OnInit,OnChanges {
  
  @Input() childMessage;
  constructor() { }

  ngOnChanges(changes: import("@angular/core").SimpleChanges){
    console.log('changes:',changes);
  }
  ngOnInit() {
    console.log(this.childMessage);
  }

}
