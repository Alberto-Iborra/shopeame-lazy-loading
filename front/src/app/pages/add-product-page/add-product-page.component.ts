import { productModel } from './../../models/productModel';
import { Component, OnInit } from '@angular/core';
import { ProductsServicesService } from 'src/app/shared/services/products-services.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product-page',
  templateUrl: './add-product-page.component.html',
  styleUrls: ['./add-product-page.component.scss']
})
export class AddProductPageComponent implements OnInit {
  product: productModel={
    id: 0,
    name: 'Niño mopa',
    price: '10',
    description:'Compra tu niño mopa, ideal para todo tipo de suelos, gasta poco',
    stars: 3,
    image: 'https://duamcomunicacion.com/wp-content/uploads/2017/01/productos-raros-japoneses10.jpg',
  }
  id!: number;
  newProductForm!: FormGroup;
  editProductForm!: FormGroup;
  submitted: boolean = false;
  // id: string = '';
  constructor(private form:FormBuilder,private productsServiceService:ProductsServicesService,private activatedRoute: ActivatedRoute, private router:Router ) { }

  delete(id: number) {
    this.productsServiceService.deleteProduct(id).subscribe((res: any) => {
    });
    this.router.navigate(['/products']);
  }
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe(params =>{this.id = Number(params.get('id'))}
    )
    if(this.id>0){
    this.productsServiceService.getProductById(this.id).subscribe((res: any)=>{
      // console.log(res);
      this.product=res
      this.router.navigate(['/addProduct/'+this.id])
      this.editProductForm = this.form.group({
        name: [this.product.name, [Validators.required, Validators.minLength(3)]],
        price: [this.product.price, [Validators.required]],
        description: [this.product.description, [Validators.required, Validators.minLength(3)]],
        stars: [this.product.stars, [Validators.required, Validators.max(5)]],
        image: [this.product.image, [Validators.required, Validators.minLength(3)]]
      });
    })
  }else{

      this.newProductForm = this.form.group({
        name: [this.productsServiceService.product.name, [Validators.required, Validators.minLength(3)]],
        price: [this.productsServiceService.product.price, [Validators.required]],
        description: [this.productsServiceService.product.description, [Validators.required, Validators.minLength(3)]],
        stars: [this.productsServiceService.product.stars, [Validators.required, Validators.max(5),Validators.min(0)]],
        image: [this.productsServiceService.product.image, [Validators.required, Validators.minLength(3)]]
      });
    }


  }
  changeId(id:number){
    this.id=id
  }
  onSubmit(){
    this.submitted = true;
    if(this.newProductForm.valid){

      const newProduct: productModel = {
        id: 1,
        name: this.newProductForm.get('name')!.value,
        price: this.newProductForm.get('price')!.value,
        stars: this.newProductForm.get('stars')!.value,
        image: this.newProductForm.get('image')!.value,
        description: this.newProductForm.get('description')!.value
      }
      newProduct.id=this.id
      this.productsServiceService.post(newProduct).subscribe();

    }
      this.newProductForm.reset();
      this.submitted = false
      this.router.navigate(['/products']);
    }
    changeProduct(product: productModel){
      this.product=product;

    }

  //   editProduct(product: productModel){
  //     this.submitted = true;
  //     console.log(product);

  //     if(this.editProductForm.valid){
  //     const editProduct: productModel = {
  //       id: 1,
  //       name: this.editProductForm.get('name')!.value,
  //       price: this.editProductForm.get('price')!.value,
  //       stars: this.editProductForm.get('stars')!.value,
  //       image: this.editProductForm.get('image')!.value,
  //       description: this.editProductForm.get('description')!.value
  //     }
  //     editProduct.id=product.id
  //     console.log(editProduct.id);

  //     this.productsServiceService.editedProduct(editProduct).subscribe();
  //   }
  //     this.editProductForm.reset();
  //     this.submitted = false
  //     this.router.navigate(['/products']);
  // }
  editProduct1(product: productModel){
    this.submitted = true;
    console.log(product);

    if(this.editProductForm.valid){
    const editProduct: productModel = {
      id: product.id,
      name: this.editProductForm.get('name')!.value,
      price: this.editProductForm.get('price')!.value,
      stars: this.editProductForm.get('stars')!.value,
      image: this.editProductForm.get('image')!.value,
      description: this.editProductForm.get('description')!.value
    }
    editProduct.id=product.id
    console.log(editProduct.id);

    this.productsServiceService.put(editProduct).subscribe();
  }
    this.editProductForm.reset();
    this.submitted = false
    this.router.navigate(['/products']);
}
}
