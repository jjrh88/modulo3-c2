import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';

import { IUser } from 'src/app/interface/IUser';
import { ConfigService } from 'src/app/service/config.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 
  public form: FormGroup
  public user: AbstractControl
  public password: AbstractControl
  public submitted = false
  
  
  listadoUsuarios: any[] = []
  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder
    ) {

      this.form = this.formBuilder.group({
        user: ['', Validators.required],
        password: ['', Validators.required]
      })
      this.user = this.form.controls['user']
      this.password = this.form.controls['password']
  }

  ngOnInit(): void {
    this.listar()
  }

  get f(){
    return this.form.controls;
  }

  listar(){
    this.userService.listar().subscribe((data)=>{
      this.listadoUsuarios = data
    })
  }

  create(){
    this.submitted = true
    if(this.form.invalid)
      return
    
    this.userService.crear(this.form.value)
      .subscribe((data: any) =>{
         if(data.status){
           this.listar()
         }
    })

  }

  
}
