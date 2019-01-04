import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArtzComponent } from './artz.component';
const routes: Routes = [{path:'',component:ArtzComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtzRoutingModule { }
