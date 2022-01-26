import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { IUser } from '../interface/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient, //para llamar el endpoind
    public configService: ConfigService) {
    }

    listar():Observable<IUser[]>{
     return this.http.get<IUser[]>(this.configService.config.urlBackend+"/api/user");
    }

    crear(data: any){
      return this.http.post(this.configService.config.urlBackend+'/api/user', data)
    }
}

