import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from 'src/app/models/oferta';

@Injectable({
  providedIn: 'root'
})
export class OfertaService {


  private URL: string = 'http://localhost:3000/'

  constructor( private http:HttpClient ) { }

  getOfertas()
  {
    return this.http.get<Oferta>(this.URL+'ofertas')
  }

  editOfertas(ofertaid:string,oferta:any)
  {
    return this.http.put(this.URL+'ofertas/'+ofertaid,oferta)
  }

  deleteOfertas(ofertaid:string)
  {
    return this.http.delete(this.URL+'ofertas/'+ofertaid)
  }

  postOfertas(oferta:any)
  {
    return this.http.post(this.URL+'ofertas',oferta)
  }


}
