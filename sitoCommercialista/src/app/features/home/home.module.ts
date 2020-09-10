import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'angular-bootstrap-md';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule.forRoot(),
    MenuModule,
   FooterModule
    
  ]
})
export class HomeModule { }
