import { Component, OnInit } from '@angular/core';
import { platos } from 'src/app/models/platos';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PlatosService } from 'src/app/services/platos/platos.service';

@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  platoslist:platos[] = [];
  platostoedit = new platos('','','','','','','','','',false);
  PlatosService: any;


  platosform = new FormGroup({
    nombre: new FormControl('',Validators.required),
    precio: new FormControl('',Validators.required),
    tiempoCocina: new FormControl('',Validators.required),
    createAt: new FormControl('',Validators.required),
    updatedAt: new FormControl('',Validators.required),
    updatedByid: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required),
  })



  newplatosform = new FormGroup({
    nombre: new FormControl('',Validators.required),
    precio: new FormControl('',Validators.required),
    tiempoCocina: new FormControl('',Validators.required),
    createAt: new FormControl('',Validators.required),
    updatedAt: new FormControl('',Validators.required),
    updatedByid: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required),
  })

  flag = false;

  cambiarFlag(){
    this.flag = !this.flag;
    if(!TouchEvent)
    {
      this.flag = !this.flag; 
    }
  }







  constructor(private platosService: PlatosService) { }

  ngOnInit(): void {
    this.getplatos()

  }





getplatos()
{
  //----este getplatos() viene de servcices
  this.platosService.getplatos().subscribe(data=>{
this.platoslist =<any>data
console.log(this.platoslist)
  })
}


deleteplatos(platoid:string)
{
  this.platosService.deleteplatos(platoid).subscribe(data=>{
    console.log(data)
    this.getplatos()
  });
}

editplatos(platosform:any,platos:string)
{
this.platosService.editplatos(platos,platosform).subscribe(data => {

  console.log(data)
  this.getplatos()
  
})
}

platosplaceholder(platosid:any)
{
 this.platostoedit=platosid 

}

filterPlatosActivos(){
  this.platoslist=this.platoslist.filter(function (a){
    return a.isActive==true;
  });    
  console.log(this.platoslist);
}

otroplato(newplatosform:any)
{
this.platosService.postplatos(newplatosform).subscribe(data =>{
console.log(data)
this.getplatos()

})
}


}
