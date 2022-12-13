import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Admin1RoutingModule } from './admin1-routing.module';
import { LogintestComponent } from './logintest/logintest.component';
import { ListTestComponent } from './list-test/list-test.component';
console.warn("Admin1Module");

@NgModule({
  declarations: [
    LogintestComponent,
    ListTestComponent
  ],
  imports: [
    CommonModule,
    Admin1RoutingModule
  ]
})
export class Admin1Module { }
