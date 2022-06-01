import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from 'src/app/models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private URL:string = 'http://localhost:3000/'

  constructor(
    private http:HttpClient
  ) { }


  getProducts()
  {
    return this.http.get<Products>(this.URL+'productos')
  }

  deleteProduct(productId:string)
  {
    return this.http.delete(this.URL+'productos/'+productId)
  }

  editProduct(product:any,productId:any)
  {
    return this.http.put(this.URL+'productos/'+productId,product)
  }
  
  postProduct(newProduct:any)
  {
    return this.http.post(this.URL+'productos',newProduct)
  }


}
