import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DigitaliRoutingModule } from './digitali-routing.module';
import { DigitaliComponent } from './digitali.component';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [DigitaliComponent],
  imports: [
    CommonModule,
    DigitaliRoutingModule,
    MenuModule,
    FooterModule
   
  ]
})
export class DigitaliModule { }
