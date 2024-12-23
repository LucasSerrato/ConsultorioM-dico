import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface PacienteDTO {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  dataUltimoAgendamento?: string;
  horaUltimoAgendamento?: string;
}

export interface Agendamento {
  id?: number;
  data: string;
  hora: string;
  pacienteId: number;
}

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private apiUrl = 'http://localhost:8080/pacientes';

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {}

  getPacientes(): Observable<PacienteDTO[]> {
    return this.http.get<PacienteDTO[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  buscarPaciente(id: number): Observable<PacienteDTO> {
    return this.http.get<PacienteDTO>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  addPaciente(paciente: PacienteDTO): Observable<PacienteDTO> {
    return this.http.post<PacienteDTO>(this.apiUrl, paciente, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  updatePaciente(id: number, paciente: PacienteDTO): Observable<PacienteDTO> {
    return this.http.put<PacienteDTO>(`${this.apiUrl}/${id}`, paciente, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deletePaciente(id: number): Observable<void> {
    console.log(`Tentando deletar o paciente com ID: ${id}`);
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getAgendamentos(pacienteId: number): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(`${this.apiUrl}/${pacienteId}/agendamentos`).pipe(
      catchError(this.handleError)
    );
  }

  addAgendamento(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(`${this.apiUrl}/${agendamento.pacienteId}/agendamentos`, agendamento, this.httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      console.error(
        `Erro do backend - Código de status: ${error.status}\n` +
        `Mensagem: ${error.message}\n` +
        `Erro completo: ${JSON.stringify(error.error)}`
      );
    }
    return throwError('Ocorreu um erro; por favor, tente novamente mais tarde.');
  }
}
