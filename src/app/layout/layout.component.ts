import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html'
})
export class LayoutComponent implements OnInit {
  showChildOptios:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  showOrHide(){
    this.showChildOptios = !this.showChildOptios;
  }
}
