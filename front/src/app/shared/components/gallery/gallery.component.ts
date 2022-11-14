import { productModel } from './../../../models/productModel';
import { Component, Input, OnInit } from '@angular/core';
import { ProductsServicesService } from '../../services/products-services.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  @Input() globalProducts: any[] =[];
  @Input() product!: productModel;
  constructor(private productsServiceService:ProductsServicesService) { }

  ngOnInit(): void {
  }

}
