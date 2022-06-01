import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'; 
import { recetas } from 'src/app/models/recetas';

//--------------controlador----------------------

@Injectable({
  providedIn: 'root'
})
export class RecetasService {

  private URL: string = 'http://localhost:3000/'
  constructor( private http:HttpClient ) { }

  getrecetas()
  {
    return this.http.get<recetas>(this.URL+'recetas')
  }
  editrecetas(recetaId:string,recetas:any)
  {
    return this.http.put<recetas>(this.URL+'recetas/'+recetaId,recetas)
  }

  deleterecetas(recetaId:string)
  {
    return this.http.delete (this.URL+'recetas/'+recetaId)
  }

  postrecetas(recetas:any)
  {
    return this.http.post(this.URL+'recetas',recetas)
  }
  
   
  getlistadorecetas(recetas:string)
  {
    return this.http.get<recetas>(this.URL+'recetas/'+recetas)
  }


}



