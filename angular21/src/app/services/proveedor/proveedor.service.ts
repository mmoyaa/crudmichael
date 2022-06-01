import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proveedor } from 'src/app/models/proveedor';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private URL:string = 'http://localhost:3000/'
  constructor(
    private http:HttpClient
  ) { }

  getProveedores()
  {
    return this.http.get<Proveedor>(this.URL+'proveedores')
  }


  deleteProveedor(proveedorId:string)
  {
    return this.http.delete(this.URL+'proveedores/'+proveedorId)
  }


  editProveedor(proveedor:any,proveedorId:string)
  {
    return this.http.put(this.URL+'proveedores/'+proveedorId,proveedor)
  }


  postProveedor(newProveedor:any)
  {
    return this.http.post(this.URL+'proveedores',newProveedor)
  }
}
