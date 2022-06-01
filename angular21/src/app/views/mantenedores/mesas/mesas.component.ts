import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Mesa } from 'src/app/models/mesas';
import { MesaService } from 'src/app/services/mesas/mesa.service';

@Component({
  selector: 'app-mesas',
  templateUrl: './mesas.component.html',
  styleUrls: ['./mesas.component.css']
})
export class MesasComponent implements OnInit {

  mesasList:Mesa[]=[]
  mesaToEdit = new Mesa('','','','',true,'')

  mesaForm = new FormGroup({
    numero: new FormControl('',Validators.required),
    estadoId: new FormControl('',Validators.required),
    capacidad: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required),
    createAt: new FormControl('',Validators.required)  
  })

  newMesaForm = new FormGroup({
    numero: new FormControl('',Validators.required),
    estadoId: new FormControl('',Validators.required),
    capacidad: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required),
    createAt: new FormControl('',Validators.required)  
  })

  constructor( private mesasService:MesaService ) { }

  ngOnInit(): void {
    this.getMesas()
  }

  getMesas()
  {
    this.mesasService.getMesas().subscribe(data=>{
      this.mesasList = <any>data
      console.log(this.mesasList)
    })
  }

  deleteMesa(mesaid:string)
  {
    this.mesasService.deleteMesa(mesaid).subscribe(data=>{
      console.log(data)
      this.getMesas()
    })
  }


  editMesa(mesaForm:any,mesaid:string)
  {
    this.mesasService.editMesa(mesaForm,mesaid).subscribe(data=>{
      console.log(data)
      this.getMesas()
    })
    
  }

  newMesa(newMesaForm:any)
  {
    this.mesasService.postMesa(newMesaForm).subscribe(data=>{
      console.log(data)
      this.getMesas()
    })

  }

  mesaPlaceHolder(mesa:Mesa)
  {
    this.mesaToEdit = mesa
  }
}
