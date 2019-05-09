import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentToChildComponent } from './parent-to-child.component';
import { RouterModule } from '@angular/router';
import { parentRoute } from './parent-to-child.routing';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [ParentToChildComponent, ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(parentRoute),
    FormsModule
  ]
})
export class ParentToChildModule { }
