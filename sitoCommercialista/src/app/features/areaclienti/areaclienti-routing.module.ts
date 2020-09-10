import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AreaclientiComponent } from './areaclienti.component';

const routes: Routes = [{ path: '', component: AreaclientiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaclientiRoutingModule { }
