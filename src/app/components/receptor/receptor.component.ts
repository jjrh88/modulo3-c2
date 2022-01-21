import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';

@Component({
  selector: 'app-receptor',
  templateUrl: './receptor.component.html',
  styleUrls: ['./receptor.component.css']
})
export class ReceptorComponent implements OnInit {

  constructor(public storageService: StorageService) { }

  ngOnInit(): void {
    
  }

  responder(item: any){
    for (let i = 0; i < this.storageService.storageMensajes.length; i++) {
      this.storageService.storageMensajes[i].status = false
      if(this.storageService.storageMensajes[i].mensaje == item.mensaje){
        this.storageService.storageMensajes[i].status = true
      }
    }
  }

}
