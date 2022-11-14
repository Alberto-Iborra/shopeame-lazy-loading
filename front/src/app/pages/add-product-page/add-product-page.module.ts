import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddProductPageRoutingModule } from './add-product-page-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AddProductPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AddProductPageModule { }
