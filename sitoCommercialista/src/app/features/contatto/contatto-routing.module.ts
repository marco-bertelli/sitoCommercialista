import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContattoComponent } from './contatto.component';

const routes: Routes = [{ path: '', component: ContattoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContattoRoutingModule { }
