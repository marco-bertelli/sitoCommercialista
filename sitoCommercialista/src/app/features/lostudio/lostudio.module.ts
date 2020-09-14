import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LostudioRoutingModule } from './lostudio-routing.module';
import { LostudioComponent } from './lostudio.component';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [LostudioComponent],
  imports: [
    CommonModule,
    LostudioRoutingModule,
    MenuModule,
    FooterModule
  ]
})
export class LostudioModule { }
