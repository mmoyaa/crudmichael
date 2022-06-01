import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { recetas } from 'src/app/models/recetas';
import { platos } from 'src/app/models/platos';


@Injectable({
  providedIn: 'root'
})
export class IngredientesService {

  private URL: string = 'http://localhost:3000/'

  constructor( private http:HttpClient) { }

  getrecetas()
  {
    return this.http.get<recetas>(this.URL+'recetas')
 }

 getplatos()
 {
   return this.http.get<platos>(this.URL+'platos')
 }

}
