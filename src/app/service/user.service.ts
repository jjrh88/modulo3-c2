import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient, //para llamar el endpoind
    public configService: ConfigService) {
    }

    listar(){
     return this.http.get(this.configService.config.urlBackend+"/api/user");
    }

    crear(data: any){
      return this.http.post(this.configService.config.urlBackend+'/api/user', data)
    }
}

