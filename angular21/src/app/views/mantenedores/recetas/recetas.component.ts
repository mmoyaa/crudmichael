import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { recetas} from 'src/app/models/recetas';
import { RecetasService } from 'src/app/services/recetas/recetas.service';
import { ReactiveFormsModule } from '@angular/forms'
import { ThisReceiver } from '@angular/compiler';
import { Products } from 'src/app/models/producto';
import { ProductService } from 'src/app/services/product/product.service'




@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css'],

})
export class RecetasComponent implements OnInit {
  [x: string]: any;
  
  // .----pronando
  ingredientes:any[] = [];
  muestraproductos: Products[] = [];

  ingrediente:any = {};



  guardar(){
    // se inserta el dato en el arreglo
    this.ingredientes.push(this.ingrediente);
    


    // se crea un nuevo objeto para almacenar nuevos datos
    this.ingrediente = {};
  }
  //--------fin probando 





  recetaslist: recetas[] = [];
  recetaproductolist :  Products[] = [];

 

  //----todo recetaid   aca la vendi con las mayusculas yt los dTOS EN FALSO
  recetatoedit = new recetas('','','','','',false);

  //------formjulario para editar receta-----Validators con V mayus---------
  recetasform = new FormGroup({
    nombre: new FormControl('',Validators.required),
    createAt: new FormControl('',Validators.required),
    updatedAt: new FormControl('',Validators.required),
    updatedByid: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required),
  })

//------formulario para nueva receta-- Validators con V mayus -- TODO quizas borrar updateat
  newrecetasform = new FormGroup({
    nombre: new FormControl('',Validators.required),
   createAt: new FormControl('',Validators.required),
   updatedAt: new FormControl('',Validators.required),
   updatedByid: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required),
  })

 



//-aca se de declara que viy a ocupar el tal servicio=como se llega al backend
  constructor(private recetasService: RecetasService) { }

  ngOnInit(): void { 

    
    this.getrecetas()
   }
     
   
getrecetas()
{
      this.recetasService.getrecetas().subscribe(data => {
        this.recetaslist = <any>data;
        console.log(this.recetaslist)

      })
  }
 
  deleterecetas(recetasId:string)
  {
    this.recetasService.deleterecetas(recetasId).subscribe(data=>{
      console.log(data)
      this.getrecetas()
    });
  }

  recetanew(recetanew:any)
  {
    this.recetasService.postrecetas(recetanew).subscribe(data=>{
      console.log(data)
      this.getrecetas()
    })
  }

  filterRecetasActivas(){
    this.recetaslist=this.recetaslist.filter(function (a){
      return a.isActive==true;
    });    
    console.log(this.recetaslist);
  }

  // ----probar en vez de any colocando el id
  recetasplaceholder(recetas:any)
  {
   this.recetatoedit=recetas 

  }

editrecetas(recetasform:any,recetas:string)
{
this.recetasService.editrecetas(recetas,recetasform).subscribe(data => {

  console.log(data)
  this.getrecetas()
  
})
}

otrareceta(newrecetasform:any)
{
this.recetasService.postrecetas(newrecetasform).subscribe(data =>{
console.log(data)
this.getrecetas()

})
}

getlistadorecetas(recetaproductolist:string)
{
 this.recetasService.getlistadorecetas(recetaproductolist).subscribe(data=>{
  this.recetaproductolist=<any>data;
  console.log(this.recetaproductolist)
 })
}





}
