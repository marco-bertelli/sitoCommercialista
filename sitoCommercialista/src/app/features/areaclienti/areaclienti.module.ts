import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AreaclientiRoutingModule } from './areaclienti-routing.module';
import { AreaclientiComponent } from './areaclienti.component';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [AreaclientiComponent],
  imports: [
    CommonModule,
    AreaclientiRoutingModule,
    MenuModule,
    FooterModule
    
  ]
})
export class AreaclientiModule { }
