import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaghecontributiComponent } from './paghecontributi.component';

const routes: Routes = [{ path: '', component: PaghecontributiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaghecontributiRoutingModule { }
