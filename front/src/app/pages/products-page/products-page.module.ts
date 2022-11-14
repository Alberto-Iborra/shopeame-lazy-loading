import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsPageRoutingModule } from './products-page-routing.module';
import { ProductsPageComponent } from './products-page.component';
import { GalleryComponent } from 'src/app/shared/components/gallery/gallery.component';


@NgModule({
  declarations: [
    ProductsPageComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    ProductsPageRoutingModule,
    NgbModule,
  ]
})
export class ProductsPageModule { }
