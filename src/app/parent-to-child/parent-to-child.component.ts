import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-to-child',
  templateUrl: './parent-to-child.component.html'
})
export class ParentToChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('hi');
  }

}
