import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContattoRoutingModule } from './contatto-routing.module';
import { ContattoComponent } from './contatto.component';
import {MyHttpServiceService} from'../../services/my-http-service.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContattoComponent],
  imports: [
    CommonModule,
    ContattoRoutingModule,
    ReactiveFormsModule
  ],
  providers: [MyHttpServiceService],
})
export class ContattoModule { }
