import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListTestComponent } from './list-test/list-test.component';
import { LogintestComponent } from './logintest/logintest.component';

const routes: Routes = [
  {
    path:"logintest",
    component:LogintestComponent
  },
  {
    path:"listtest",
    component:ListTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Admin1RoutingModule { }
