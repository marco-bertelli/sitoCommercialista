import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterRoutingModule } from './footer-routing.module';
import { FooterComponent } from './footer.component';
import {MyHttpServiceService} from'../../services/my-http-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FooterRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    FooterComponent
  ],
  providers: [MyHttpServiceService],
})
export class FooterModule { }
