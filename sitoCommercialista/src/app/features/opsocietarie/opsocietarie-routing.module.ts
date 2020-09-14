import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpsocietarieComponent } from './opsocietarie.component';

const routes: Routes = [{ path: '', component: OpsocietarieComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpsocietarieRoutingModule { }
