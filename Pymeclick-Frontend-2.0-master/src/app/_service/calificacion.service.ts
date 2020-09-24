import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Subject } from 'rxjs';
import { Calificacion } from './../_model/calificacion';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalificacionService {

  calificacionCambio = new Subject<calificacion[]>();
  mensajeCambio = new Subject<string>();

  url: string = `${environment.HOST}/calificacion`;

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<Calificacion[]>(this.url);
  }
}
