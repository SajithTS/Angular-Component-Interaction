import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'',
    component:LayoutComponent,
    children:[
      {path:'parent-to-child',loadChildren:'./parent-to-child/parent-to-child.module#ParentToChildModule'},
      {path:'child-to-parent',loadChildren:'./child-to-parent/child-to-parent.module#ChildToParentModule'},
      {path:'using-service',loadChildren:'./mutual-communication/mutual-communication.module#MutualCommunicationModule'}
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
