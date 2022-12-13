import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { SignupComponent } from './users/signup/signup.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },{
    path:'signup',
    component:SignupComponent
  },
  {
    path:'admin1',
    loadChildren:()=>import("../app/admin1/admin1.module").then(mod=>mod.Admin1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
