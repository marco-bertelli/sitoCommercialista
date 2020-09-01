import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LostudioComponent } from './lostudio.component';

const routes: Routes = [{ path: '', component: LostudioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LostudioRoutingModule { }
