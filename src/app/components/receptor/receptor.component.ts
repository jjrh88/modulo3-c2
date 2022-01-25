import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.component.html',
  styleUrls: ['./receptor.component.css']
})
export class ReceptorComponent implements OnInit {

  resp : string = ""
  temporalRespuesta: any
  itemTmp: any
  constructor(public storageService: StorageService) { }

  ngOnInit(): void {
    
  }

  responder(item: any){
    for (let i = 0; i < this.storageService.storageMensajes.length; i++) {
      this.storageService.storageMensajes[i].status = false
      if(this.storageService.storageMensajes[i].mensaje == item.mensaje){
        this.storageService.storageMensajes[i].status = true
        this.itemTmp = this.storageService.storageMensajes[i]
      }
    }
  }

  preparandoRespuesta(event: any){
     this.resp = event.target.value
  }

  enviarRespuesta(){
    console.log( this.resp )
    this.storageService.storageMensajesEmisor.forEach(i => {
      console.log( i )
      if(i.name == this.itemTmp.name){
          i.respuesta =  this.resp
      }
    });
  }
}
