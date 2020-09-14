import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaghecontributiRoutingModule } from './paghecontributi-routing.module';
import { PaghecontributiComponent } from './paghecontributi.component';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [PaghecontributiComponent],
  imports: [
    CommonModule,
    PaghecontributiRoutingModule,
    MenuModule,
    FooterModule
  ]
})
export class PaghecontributiModule { }
