import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltriComponent } from './altri.component';

const routes: Routes = [{ path: '', component: AltriComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltriRoutingModule { }
