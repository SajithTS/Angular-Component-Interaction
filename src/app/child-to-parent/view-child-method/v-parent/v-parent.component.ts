import { Component, OnInit, ViewChild, AfterViewInit, OnChanges } from '@angular/core';
import { VChildComponent } from '../v-child/v-child.component';

@Component({
  selector: 'app-v-parent',
  templateUrl: './v-parent.component.html'
})
export class VParentComponent implements AfterViewInit {
  
  @ViewChild(VChildComponent) child;
  show:boolean = false;
  message:string;
  constructor() { }
  ngAfterViewInit(){
    this.show = true;
    this.message = this.child.childMessage;
  }
  
}
