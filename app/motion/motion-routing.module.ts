import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MotionComponent } from './motion.component';
import { VlogprofileComponent } from '../vlogprofile/vlogprofile.component';
const routes: Routes = [
{path:'motion/:id',component:VlogprofileComponent},
{path:'motion',component:MotionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotionRoutingModule { }
