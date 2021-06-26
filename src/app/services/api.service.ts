import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { }

  /**
   * Método que nos devuelve de la Api el Objeto que vamos a buscar mediante su fecha
   * @param date Fecha de la cual queremos saber la información.
   */
  public async getModel(date:string):Promise<any>{
    const finalendpoint:string=environment.endpoint+date;
    return new Promise<any>(async(resolve,reyect)=>{
      try {
        let obj:any=await this.api.get(finalendpoint).toPromise();
        resolve(obj);
      } catch (error) {
        reyect(error);
      }
    })
  }
}
