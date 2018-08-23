import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ConsultaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultaProvider {

  

  constructor(public http: HttpClient) {
    console.log('Hello ConsultaProvider Provider');
  }

  buscarProducto(termino:string){
      let url ="http://prueba-ionic.000webhostapp.com/rest/index.php/productos/buscar/"+ termino;
      return this.http.get(url);
      
  }


}
