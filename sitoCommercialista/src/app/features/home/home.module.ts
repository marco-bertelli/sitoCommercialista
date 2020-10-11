import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { MenuModule } from '../menu/menu.module';
import { FooterModule } from '../footer/footer.module';
import { CookieLawModule } from 'angular2-cookie-law';
import { MenuV2Component } from '../menu-v2/menu-v2.component';




@NgModule({
  declarations: [HomeComponent,MenuV2Component],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MenuModule,
   FooterModule,
   CookieLawModule
    
  ]
})
export class HomeModule { }
