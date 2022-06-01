import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Products } from 'src/app/models/producto';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productList: Products[] = []
  productToEdit = new Products('','','',0,'','',false)


  productForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    proveedorId: new FormControl('',Validators.required),
    stock: new FormControl('',Validators.required),
    ultimaCompra: new FormControl('',Validators.required),
    tipoProductoId: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required)
  })

  newProductForm = new FormGroup({
    nombre: new FormControl('',Validators.required),
    proveedorId: new FormControl('',Validators.required),
    stock: new FormControl('',Validators.required),
    ultimaCompra: new FormControl('',Validators.required),
    tipoProductoId: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required)

  })


  constructor( private productService:ProductService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts()
  {
    this.productService.getProducts().subscribe(data=>{
      this.productList= <any>data
    })
  }

  editProduct(productForm:any,productId:string)
  {
    this.productService.editProduct(productForm,productId).subscribe(data=>{
      console.log(data)
      this.getProducts()
    })
  }

  deleteProduct(productid:string)
  {
    this.productService.deleteProduct(productid).subscribe(data=>{
      console.log(data)
      this.getProducts()
    })
  }

  addProduct(newProduct:any)
  {
    this.productService.postProduct(newProduct).subscribe(data=>{
      console.log(data)
      this.getProducts()
    })
  }

  placeHolderProduct(product:Products)
  {
    this.productToEdit = product
  }
}
