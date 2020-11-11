import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltriRoutingModule } from './altri-routing.module';
import { AltriComponent } from './altri.component';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [AltriComponent],
  imports: [
    CommonModule,
    AltriRoutingModule,
    MenuModule,
    FooterModule
    
  ]
})
export class AltriModule { }
