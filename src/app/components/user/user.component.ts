import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: string = ""
  password : string = ""
  listadoUsuarios: any
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    this.listar()
  }

  listar(){
    this.userService.listar().subscribe((data:any)=>{
      this.listadoUsuarios = data
    },
    error =>{
      console.error("ha ocurrido un error ")
    })
  }

  create(){
    this.userService.crear({
      user: this.user,
      password: this.password
    }).subscribe((data: any) =>{
       if(data.status){
         this.limpiarCampos()
         this.listar()
       }
    })
  }

  limpiarCampos(){
    this.user = ""
    this.password = ""
  }

}
