import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PacienteService, PacienteDTO } from '../../services/paciente.service';

@Component({
  selector: 'app-paciente-list',
  templateUrl: './paciente-list.component.html',
  styleUrls: ['./paciente-list.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PacienteListComponent implements OnInit {
  pacientes: PacienteDTO[] = []; // Usando PacienteDTO para incluir o campo ultimoAgendamento

  constructor(
    private pacienteService: PacienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadPacientes(); // Carrega a lista de pacientes ao inicializar o componente
  }

  // Método para carregar todos os pacientes
  loadPacientes(): void {
    this.pacienteService.getPacientes().subscribe(
      (data) => {
        this.pacientes = data;
      },
      (error) => {
        console.error('Erro ao carregar pacientes', error);
      }
    );
  }

  // Navega para a página de adicionar um novo paciente
  navigateToAddPaciente(): void {
    this.router.navigate(['/paciente/novo']);
  }

  // Navega para a página de adicionar um novo médico
  navigateToAddMedico(): void {
    this.router.navigate(['/medico/novo']);
  }

  // Navega para a lista de médicos cadastrados
  navigateToMedicoList(): void {
    this.router.navigate(['/medicos']);
  }

  // Navega para a página de edição do paciente
  editPaciente(id: number | undefined): void {
    if (id) { // Confere se o ID é válido antes de navegar
      this.router.navigate(['/paciente', id, 'editar']);
    }
  }

  // Remove um paciente e recarrega a lista
  deletePaciente(id: number | undefined): void {
    if (id && confirm('Tem certeza que deseja remover este paciente?')) {
      this.pacienteService.deletePaciente(id).subscribe(
        () => {
          this.loadPacientes(); // Atualiza a lista após a exclusão
        },
        (error) => {
          console.error('Erro ao deletar paciente', error);
        }
      );
    }
  }

  // Navega para a página de agendamento de consulta para o paciente
  navigateToSchedule(id: number | undefined): void {
    if (id) { // Verifica se o ID é válido antes de navegar
      this.router.navigate(['/agendamento-consulta', id]);
    }
  }

  // Método de logout para redirecionar para a página de login
  logout(): void {
    // Remover qualquer dado de autenticação armazenado, como um token de autenticação
    localStorage.removeItem('isAdmin'); // Exemplo de remoção de um item de autenticação
    this.router.navigate(['/login']); // Redireciona para a página de login
  }
}
