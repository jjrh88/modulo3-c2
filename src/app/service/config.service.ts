import { Injectable } from '@angular/core';
import { configuration } from '../configuration/configuration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  //definir variable que va almacenar la configuracion
  public config = configuration
  constructor() { }


}

