import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-v-child',
  templateUrl: './v-child.component.html'
})
export class VChildComponent implements OnInit {
  constructor() { }
  childMessage:string = "Hello i'm child";
  ngOnInit() {
  }

}
