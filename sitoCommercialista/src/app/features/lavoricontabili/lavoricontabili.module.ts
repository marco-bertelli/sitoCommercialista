import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LavoricontabiliRoutingModule } from './lavoricontabili-routing.module';
import { LavoricontabiliComponent } from './lavoricontabili.component';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [LavoricontabiliComponent],
  imports: [
    CommonModule,
    LavoricontabiliRoutingModule,
    MenuModule,
    FooterModule
  ]
})
export class LavoricontabiliModule { }
