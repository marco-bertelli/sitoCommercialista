import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanzaRoutingModule } from './finanza-routing.module';
import { FinanzaComponent } from './finanza.component';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [FinanzaComponent],
  imports: [
    CommonModule,
    FinanzaRoutingModule,
    MenuModule,
    FooterModule
  ]
})
export class FinanzaModule { }
