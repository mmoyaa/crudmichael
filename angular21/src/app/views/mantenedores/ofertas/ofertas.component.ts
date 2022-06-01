import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Oferta } from 'src/app/models/oferta';
import { OfertaService } from 'src/app/services/ofertas/oferta.service';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.css']
})
export class OfertasComponent implements OnInit {

  ofertasList:Oferta[] = []
  ofertaToEdit = new Oferta('','','',true)

  ofertaForm = new FormGroup({
    cantidad: new FormControl('',Validators.required),
    createAt: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required)
  })

  newOfertaForm = new FormGroup({
    cantidad: new FormControl('',Validators.required),
    createAt: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required)
  })



  constructor( private ofertasService:OfertaService ) { }


  ngOnInit(): void {

    this.getOfertas()

  }


  getOfertas()
  {
    this.ofertasService.getOfertas().subscribe(data=>{
      this.ofertasList = <any>data
      console.log(this.ofertasList)
    })
  }

  ofertaPlaceHolder(oferta:any)
  {
    this.ofertaToEdit = oferta
  }

  editOferta(formOferta:any,oferta:string)
  {
    this.ofertasService.editOfertas(oferta,formOferta).subscribe(data=>{
      console.log(data)
      this.getOfertas()
    })
  }

  deleteOferta(ofertaid:string)
  {
    this.ofertasService.deleteOfertas(ofertaid).subscribe(data=>{
      console.log(data)
      this.getOfertas()
    })
  }

  newOferta(newOfertaForm:any)
  {
    this.ofertasService.postOfertas(newOfertaForm).subscribe(data=>{
      console.log(data)
      this.getOfertas()
    })
  }



}
