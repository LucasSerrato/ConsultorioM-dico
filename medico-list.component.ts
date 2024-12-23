import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico.service';
import { Medico } from '../../models/medico.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medico-list',
  templateUrl: './medico-list.component.html',
  styleUrls: ['./medico-list.component.css']
})
export class MedicoListComponent implements OnInit {
  medicos: Medico[] = []; // Armazena a lista de médicos

  constructor(
    private medicoService: MedicoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMedicos(); // Carrega a lista de médicos ao inicializar o componente
  }

  // Método para carregar a lista de médicos
  loadMedicos(): void {
    this.medicoService.listarMedicos().subscribe({
      next: (data: Medico[]) => {
        this.medicos = data; // Atualiza a lista de médicos com os dados recebidos
      },
      error: (error: any) => {
        console.error('Erro ao carregar médicos:', error); // Loga um erro se a requisição falhar
      }
    });
  }

  // Navega para o formulário para adicionar um novo médico
  navigateToAddMedico(): void {
    this.router.navigate(['/medico/novo']).then(() => {
      console.log('Navegação para a página de adicionar médico foi bem-sucedida');
    }).catch((error: any) => {
      console.error('Erro ao navegar para a página de adicionar médico:', error);
    });
  }

  // Navega para a lista de pacientes
  navigateToPacientes(): void {
    this.router.navigate(['/pacientes']).then(() => {
      console.log('Navegação para a página de pacientes foi bem-sucedida');
    }).catch((error: any) => {
      console.error('Erro ao navegar para a página de pacientes:', error);
    });
  }

  // Navega para o formulário de edição de um médico existente
  editMedico(id: number | undefined): void {
    if (id !== undefined) {
      this.router.navigate(['/medico', id, 'editar']).then(() => {
        console.log('Navegação para a página de edição de médico foi bem-sucedida');
      }).catch((error: any) => {
        console.error('Erro ao navegar para a página de edição de médico:', error);
      });
    }
  }

  // Método para excluir um médico
  deleteMedico(id: number | undefined): void {
    if (id !== undefined && confirm('Tem certeza que deseja remover este médico?')) {
      this.medicoService.deletarMedico(id).subscribe({
        next: () => {
          this.loadMedicos(); // Recarrega a lista após a exclusão
        },
        error: (error: any) => {
          console.error('Erro ao deletar médico:', error); // Loga um erro se a requisição falhar
        }
      });
    }
  }
}
