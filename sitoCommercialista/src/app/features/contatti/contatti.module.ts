import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../menu/menu.module';

import { ContattiRoutingModule } from './contatti-routing.module';
import { ContattiComponent } from './contatti.component';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [ContattiComponent],
  imports: [
    CommonModule,
    ContattiRoutingModule,
    MenuModule,
    FooterModule
  ]
})
export class ContattiModule { }
