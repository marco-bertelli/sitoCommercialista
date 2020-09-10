import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaclientiRoutingModule } from './areaclienti-routing.module';
import { AreaclientiComponent } from './areaclienti.component';


@NgModule({
  declarations: [AreaclientiComponent],
  imports: [
    CommonModule,
    AreaclientiRoutingModule
  ]
})
export class AreaclientiModule { }
