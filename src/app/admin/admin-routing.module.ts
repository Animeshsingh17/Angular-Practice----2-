import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
const routes: Routes = [
   {
    path:"admin/login1",
    component:LoginComponent
   } , 
   {
    path:"admin/list",
    component:ListComponent
   }
];

@NgModule({                                  
  imports: [RouterModule.forChild(routes)],       //Module Routing
  exports: [RouterModule]
})
export class AdminRoutingModule { }
