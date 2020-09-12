import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigitaliComponent } from './digitali.component';

const routes: Routes = [{ path: '', component: DigitaliComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DigitaliRoutingModule { }
