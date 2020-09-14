import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpsocietarieRoutingModule } from './opsocietarie-routing.module';
import { OpsocietarieComponent } from './opsocietarie.component';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [OpsocietarieComponent],
  imports: [
    CommonModule,
    OpsocietarieRoutingModule,
    MenuModule,
    FooterModule
  ]
})
export class OpsocietarieModule { }
