import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/models/proveedor';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  proveedorList:Proveedor[]=[]
  proveedorToEdit = new Proveedor('','','','',true)

  proveedorForm = new FormGroup({
    nombre:new FormControl('',Validators.required),
    rut: new FormControl('',Validators.required),
    createAt: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required)
  })

  newProveedorForm = new FormGroup({
    nombre:new FormControl('',Validators.required),
    rut: new FormControl('',Validators.required),
    createAt: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required)
  })


  constructor(private proveedorSerivce:ProveedorService) { }

  ngOnInit(): void {
    this.getProveedor()
  }

  getProveedor()
  {
    this.proveedorSerivce.getProveedores().subscribe(data=>{
      this.proveedorList = <any>data
      console.log(data)
    })
  }

  deleteProveedor(proveedorId:string)
  {
    this.proveedorSerivce.deleteProveedor(proveedorId).subscribe(data=>{
      console.log(data)
      this.getProveedor()
    })
  }

  placeHolderProveedor(proveedor:Proveedor)
  {
    this.proveedorToEdit = proveedor
  }

  editProveedor(proveedor:any,proveedorId:string)
  {
    this.proveedorSerivce.editProveedor(proveedor,proveedorId).subscribe(data=>{
      console.log(data)
      this.getProveedor()
    })
  }

  newProveedor(newProveedor:any)
  {
    this.proveedorSerivce.postProveedor(newProveedor).subscribe(data=>{
      console.log(data)
      this.getProveedor()
    })
  }



}
