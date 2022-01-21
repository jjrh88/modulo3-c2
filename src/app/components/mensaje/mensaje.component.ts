import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {

    mensaje: string = ""
    tipocanal: string = "email"
    canal: any[] = [
      {
       name:"email"
      },
      {
      name:"sms"
      },
      {
        name:"fax"
      },
      {
        name: "tv"
      },
      {
        name:"valla publicitaria"
      }
    ]
    listaMensaje : any[] = []
 
    constructor(private storageService: StorageService){
      
    }

    enviar(){
      this.listaMensaje.push({
        mensaje: this.mensaje,
        tipocanal: this.tipocanal,
        respuesta:""
      })

      this.storageService.storageMensajes.push({
        mensaje: this.mensaje,
        tipocanal: this.tipocanal,
        status: false
      })
      this.limpiarCampos()
    }

    limpiarCampos(){
      this.mensaje =  ""
      this.tipocanal = "email"
    }

}
