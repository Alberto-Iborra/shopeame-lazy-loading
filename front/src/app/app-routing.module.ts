
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: ``, loadChildren: () =>
      import('./pages/home-page/home-page.module').then(m => m.HomePageModule)},
  {path: `products`, loadChildren: () =>
      import('./pages/products-page/products-page.module').then(m => m.ProductsPageModule)},
  {path: `addProduct`, loadChildren: () =>
      import('./pages/add-product-page/add-product-page.module').then(m => m.AddProductPageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
