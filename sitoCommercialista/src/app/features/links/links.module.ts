import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from '../menu/menu.module';

import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';


@NgModule({
  declarations: [LinksComponent],
  imports: [
    CommonModule,
    LinksRoutingModule,
    MenuModule
  ]
})
export class LinksModule { }
