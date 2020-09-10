import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';
import { MenuModule } from '../menu/menu.module';
import { MenuComponent } from '../menu/menu.component';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    LinksRoutingModule,
    MenuModule,
    FooterModule
  ]
})
export class LinksModule { }
