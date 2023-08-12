import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';
import { environment } from 'src/enviroments/enviroments';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( private HttpClient:HttpClient) { }
  
  public api_url = environment.api_url;
  public headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

  sendFile(_file:File){ 
    const url = this.api_url + '/access/cargar-archivo/';
    const formData = new FormData();
    formData.append('archivo', _file);
    return this.HttpClient.post(url,formData);
  }

  sendQuery(query:string){
    console.log('Pregunta::::',query)
    const url = this.api_url + '/access/pregunta/';
    const body = new FormData();
    body.append('pregunta',query);
    return this.HttpClient.post(url,{pregunta:query},{headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }
}
