import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mesa } from 'src/app/models/mesas';

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private URL:string = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  getMesas()
  {
    return this.http.get<Mesa>(this.URL+'mesas')
  }

  deleteMesa(mesaid:string)
  {
    return this.http.delete(this.URL+'mesas/'+mesaid)
  }

  editMesa(mesa:any,mesaid:string)
  {
    return this.http.put(this.URL+'mesas/'+mesaid,mesa)
  }

  postMesa(mesa:any)
  {
    return this.http.post(this.URL+'mesas',mesa)
  }

}
