import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LostudioRoutingModule } from './lostudio-routing.module';
import { LostudioComponent } from './lostudio.component';
import { MenuModule } from '../menu/menu.module';


@NgModule({
  declarations: [LostudioComponent],
  imports: [
    CommonModule,
    LostudioRoutingModule,
    MenuModule
  ]
})
export class LostudioModule { }
