import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LavoricontabiliComponent } from './lavoricontabili.component';

const routes: Routes = [{ path: '', component: LavoricontabiliComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LavoricontabiliRoutingModule { }
