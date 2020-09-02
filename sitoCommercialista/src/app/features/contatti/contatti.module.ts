import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../menu/menu.module';

import { ContattiRoutingModule } from './contatti-routing.module';
import { ContattiComponent } from './contatti.component';


@NgModule({
  declarations: [ContattiComponent],
  imports: [
    CommonModule,
    ContattiRoutingModule,
    MenuModule
  ]
})
export class ContattiModule { }
