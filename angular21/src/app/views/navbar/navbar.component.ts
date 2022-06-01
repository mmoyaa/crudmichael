import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import decode from 'jwt-decode'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }

  checkRole()
  {
    const token:any = localStorage.getItem('token')
    const {username,usuarioid,tipoUsuarioId}:any = decode(token)
    if(tipoUsuarioId==1)
    {
      return true
    }

    return false

    
  }

  logOut(){
    localStorage.clear()
    this.router.navigate([""])
  }

}
