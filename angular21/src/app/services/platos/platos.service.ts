import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { platos } from 'src/app/models/platos';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {

  private URL: string = 'http://localhost:3000/'
  constructor( private http:HttpClient ) { }

  getplatos()
  {
    return this.http.get<platos>(this.URL+'platos')
  }

  editplatos(platoid:string,platos:any)
  {
    return this.http.put<platos>(this.URL+'platos/'+platoid,platos)
  }

  deleteplatos(platoid:string)
  {
return this.http.delete<platos>(this.URL+'platos/'+platoid)
  }
  
  postplatos(platos:any)
  {
    return this.http.post(this.URL+'platos/',platos)
  }


}
 