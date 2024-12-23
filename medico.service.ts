import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medico } from '../models/medico.model';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private apiUrl = 'http://localhost:8080/medicos';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  listarMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(this.apiUrl, this.httpOptions);
  }

  buscarMedico(id: number): Observable<Medico> {
    return this.http.get<Medico>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  adicionarMedico(medico: Medico): Observable<Medico> {
    return this.http.post<Medico>(this.apiUrl, medico, this.httpOptions);
  }

  atualizarMedico(id: number, medico: Medico): Observable<Medico> {
    return this.http.put<Medico>(`${this.apiUrl}/${id}`, medico, this.httpOptions);
  }

  deletarMedico(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions);
  }
}
