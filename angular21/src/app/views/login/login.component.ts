import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  errorStatus:boolean=false;
  errorMsj:any =""

  constructor(private auth:AuthService, private router:Router,) { }

  ngOnInit(): void 
  {
    this.checkLocalStorage()
  }

  checkLocalStorage()
  {
    if(localStorage.getItem('token'))
    {
      this.router.navigate(['dashboard'])
    }
  }

  logIn(form:any)
  {
    
    this.auth.singin(form).subscribe(res=>{

      const data = JSON.stringify(res)
      const data2 = JSON.parse(data)
      
      if(data2.token)
      {
        localStorage.setItem('token',data2.token);
        this.router.navigate(['dashboard'])
      }
      else
      {
        this.errorMsj=data
        this.errorStatus=true;
      }

    })
  }

}
