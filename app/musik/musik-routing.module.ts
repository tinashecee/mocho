import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MusikComponent } from './musik.component';
const routes: Routes = [{
  path:'',component:MusikComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusikRoutingModule { }
