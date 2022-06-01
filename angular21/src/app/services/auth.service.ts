import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL:string ='http://localhost:3000/'

  constructor(
    private http:HttpClient,
    private jwtHelper:JwtHelperService) { }

    singin(form:any)
    {
      return this.http.post(this.URL+'login',form)
    }

    isAuth():boolean
    {
      const token:any = localStorage.getItem('token')

      if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token'))
      { 
        return false
      }
      
      return true
    }
}
