import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map, Subscription, timer } from 'rxjs';
import { Users } from 'src/app/models/usuario';
import { UserService } from 'src/app/services/user/user.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  userList: Users[] = [];
  userToEdit:Users = new Users("","","","","",true,"","");

  userForm=new FormGroup({
    nombre:new FormControl('',Validators.required),
    apellidos:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
    isActive:new FormControl('',Validators.required),
    tipoUsuarioId:new FormControl('',Validators.required)
  })

  newUserForm= new FormGroup({
    nombre: new FormControl('',Validators.required),
    apellidos: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    isActive: new FormControl('',Validators.required),
    tipoUsuarioId: new FormControl('',Validators.required)
  })

  constructor(private user:UserService) { }

  timerSubscription:Subscription | undefined

  ngOnInit():void
  {
   
    this.timerSubscription = timer(0,4*10000).pipe(
      map(()=>{
        this.getUsers()
      })
    ).subscribe();

  }



  
  getUsers()
  {
      let nodata:any = []
      if(localStorage.getItem('token'))
      {
        this.user.getUsers().subscribe(data=>{
        this.userList = <any>data
    
        })
      }
      else
      {
        return nodata
      }
  }

 
  deleteUser(user:any)
  { 
      this.user.deleteUser(user).subscribe(data=>{
        console.log(data)
        this.getUsers()
      })
  }

  placeHolderUser(user:Users)
  {
    this.userToEdit = user;
  }

  editUser(userForm:any,usuarioid:any)
  {

    this.user.editUser(userForm,usuarioid).subscribe(data=>{
    this.getUsers()
    alert("Usuario Editado")
    })

    
 
  }

  newUser(newUserForm:any)
  {
    
    this.user.newUser(newUserForm).subscribe(data=>{
      this.getUsers()
      alert("Usuario agregado")
    })
    
  }

}
