import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  obtenerRespuesta(pregunta: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = `pregunta=${encodeURIComponent(pregunta)}`;

    return this.http.post(`${this.apiUrl}/access/pregunta/`, body, { headers: headers });
  }
  cargarArchivo(archivo: File): Observable<any> {
    const formData = new FormData();
    formData.append('archivo', archivo, archivo.name);
    
    return this.http.post(`${this.apiUrl}/access/cargar-archivo/`, formData);
  }
}






