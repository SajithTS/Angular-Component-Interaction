import { Routes } from "@angular/router";
import { ViewChildMethodComponent } from "./view-child-method/view-child-method.component";
import { OutputMethodComponent } from "./output-method/output-method.component";

export const childRoute:Routes = [
    {path:'view-child-method',component:ViewChildMethodComponent},
    {path:'output-decorator-method',component:OutputMethodComponent}
]