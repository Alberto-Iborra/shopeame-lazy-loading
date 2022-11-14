import { AddProductPageComponent } from './add-product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AddProductPageComponent },
  { path: ':id', component: AddProductPageComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProductPageRoutingModule { }
