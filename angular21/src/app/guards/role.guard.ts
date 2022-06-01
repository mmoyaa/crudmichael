import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private auth:AuthService, private route:Router){}

  canActivate(route:ActivatedRouteSnapshot):boolean{

    const expectedRole=route.data['expectedRole']
    const token:any = localStorage.getItem('token')

    const {username,tipoUsuarioId}:any=decode(token)

    if(expectedRole != tipoUsuarioId)
    {
      alert("No tiene los permisos adecuados")
      this.route.navigate([''])
      return false;
    }
    return true;
    

  }
  
}
