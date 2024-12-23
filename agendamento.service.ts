import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {
  private apiUrl = 'http://localhost:8080/pacientes';


  constructor(private http: HttpClient) {}

  addAgendamento(pacienteId: number, agendamento: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${pacienteId}/agendamentos`, agendamento).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 404) {
      console.error('Endpoint não encontrado:', error.message);
    } else {
      console.error('Erro ao fazer requisição:', error);
    }
    return throwError('Erro ao processar a solicitação. Tente novamente mais tarde.');
  }
}
