import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, observable } from 'rxjs';
import { Users } from 'src/app/models/usuario';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URL:string = 'http://localhost:3000/'

  constructor(
    private http:HttpClient,
    private jwtHelper:JwtHelperService
  ) { }




  getUsers():Observable<Users[]>
  {
    console.log(this.URL+'usuarios')
    return this.http.get<Users[]>(this.URL+'usuarios')
  }


  deleteUser(user:string)
  { 
    return this.http.delete(this.URL+'usuarios/'+user)
  }
  

  editUser(user:any,usuarioid:any)
  {
    return this.http.put(this.URL+'usuarios/'+usuarioid,user)
  }

  newUser(newUser:any)
  {
    return this.http.post(this.URL+'usuarios',newUser)
  }


}


