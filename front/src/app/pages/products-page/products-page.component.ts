import { productModel } from './../../models/productModel';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ProductsServicesService } from 'src/app/shared/services/products-services.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  productsList: any[] =[];
  @Output() emitId = new EventEmitter()
  @Output() emitProduct = new EventEmitter()
  product: productModel={
    id: 1,
    name: 'string',
    price: 'string',
    description:'string',
    stars: 1,
    image: 'string',
  }
  id!: number;




  constructor(private productsServiceService:ProductsServicesService) { }

  ngOnInit(): void {
      this.productsServiceService.getProducts().subscribe((res: any)=>{
        // console.log(res);
        this.productsList=res
      })
  }

  sendId(){
    this.id= this.productsList.length > 0 ? this.productsList[this.productsList.length - 1].id+1 : 1;
    this.emitId.emit(this.id);
  }
  sendProduct(){
    this.emitProduct.emit(this.product);
  }

}
