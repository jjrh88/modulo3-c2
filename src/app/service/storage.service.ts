import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  storageMensajes: any[] = []
  storageMensajesEmisor: any[] = []

  constructor() { }
}

