import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from './curso';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  constructor(private http: HttpClient) { }

  listarCurso(): Observable<Curso[]> {
    return this.http.get<Curso[]>("https://6434883f1c5ed06c95992ed2.mockapi.io/api/v1/curso");
  }
}
