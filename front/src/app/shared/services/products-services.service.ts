import { productModel } from './../../models/productModel';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {
  url:string ='http://localhost:3000/products';
  productsList: productModel[]=[]
  product: productModel={
    id: 1,
    name: '',
    price: '',
    description:'',

    image: '',
  }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http:HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/products')
  }

  getProductById(id: number):Observable<productModel>{
    return this.http.get<productModel>('http://localhost:3000/products/'+id)
  }

  post(product: productModel):Observable<productModel>{
    this.productsList = [...this.productsList,product];
    return this.http.post<productModel>(this.url,product);
  }
  put(product: productModel):Observable<productModel>{
    this.productsList = [...this.productsList,product];
    return this.http.put<productModel>('http://localhost:3000/products/'+ product.id.toString(),product);
  }

  editedProduct(product: productModel){
    console.log(product)
    this.deleteProduct(product.id).subscribe()
    console.log(product)
    return this.http.post<productModel>(this.url,product);
  }

  deleteProduct(id: number){
    return this.http.delete(this.url + '/' + id);
  }


}
