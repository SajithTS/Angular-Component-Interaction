import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewChildMethodComponent } from './view-child-method/view-child-method.component';
import { OutputMethodComponent } from './output-method/output-method.component';
import { RouterModule } from '@angular/router';
import { childRoute } from './child-to-parent.routing';
import { VChildComponent } from './view-child-method/v-child/v-child.component';
import { VParentComponent } from './view-child-method/v-parent/v-parent.component';
import { OChildComponent } from './output-method/o-child/o-child.component';
import { OParentComponent } from './output-method/o-parent/o-parent.component';

@NgModule({
  declarations: [ViewChildMethodComponent, OutputMethodComponent, VChildComponent, VParentComponent, OChildComponent, OParentComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoute)
  ]
})
export class ChildToParentModule { }
