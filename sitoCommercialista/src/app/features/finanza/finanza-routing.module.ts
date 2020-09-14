import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FinanzaComponent } from './finanza.component';

const routes: Routes = [{ path: '', component: FinanzaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanzaRoutingModule { }
