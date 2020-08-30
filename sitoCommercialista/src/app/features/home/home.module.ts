import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselModule } from 'angular-bootstrap-md';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBH1cnxmszq7CG5_v00JFhvRF6NGv1cdgI'
    }) 
    
  ]
})
export class HomeModule { }
