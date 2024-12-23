import { Component, OnInit } from '@angular/core';
import { PacienteService, PacienteDTO } from '../../services/paciente.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paciente-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './paciente-form.component.html',
  styleUrls: ['./paciente-form.component.css']
})
export class PacienteFormComponent implements OnInit {
  pacienteForm: FormGroup;
  pacienteId?: number;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private pacienteService: PacienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Inicialização do formulário com os campos e validações necessárias
    this.pacienteForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Recupera o ID do paciente da rota para verificar se é uma edição
    this.pacienteId = Number(this.route.snapshot.paramMap.get('id'));
    this.isEditMode = !!this.pacienteId; // Define o modo de edição com base na presença do ID

    if (this.isEditMode) {
      this.loadPaciente();
    }
  }

  // Carrega os dados do paciente para edição, se o ID estiver presente
  private loadPaciente(): void {
    this.pacienteService.buscarPaciente(this.pacienteId!).subscribe({
      next: (paciente: PacienteDTO) => {
        this.pacienteForm.patchValue(paciente); // Preenche o formulário com os dados do paciente
      },
      error: (err) => {
        console.error('Erro ao carregar paciente:', err);
        alert('Erro ao carregar os dados do paciente.');
        this.router.navigate(['/pacientes']);
      }
    });
  }

  // Método para salvar (criar ou atualizar) o paciente
  savePaciente(): void {
    if (this.pacienteForm.valid) {
      const pacienteData = this.pacienteForm.value;

      if (this.isEditMode) {
        // Atualiza o paciente existente
        this.pacienteService.updatePaciente(this.pacienteId!, pacienteData).subscribe({
          next: () => this.onSuccess('Paciente atualizado com sucesso!'),
          error: (err) => this.onError('Erro ao atualizar o paciente', err)
        });
      } else {
        // Cria um novo paciente
        this.pacienteService.addPaciente(pacienteData).subscribe({
          next: () => this.onSuccess('Paciente adicionado com sucesso!'),
          error: (err) => this.onError('Erro ao adicionar o paciente', err)
        });
      }
    } else {
      alert('Preencha todos os campos obrigatórios.');
    }
  }

  // Exibe uma mensagem de sucesso e redireciona para a lista de pacientes
  private onSuccess(message: string): void {
    alert(message);
    this.router.navigate(['/pacientes']).then(() => {
      console.log('Navegação concluída com sucesso.');
    }).catch((error) => {
      console.error('Erro durante a navegação:', error);
    });
  }

  // Exibe uma mensagem de erro
  private onError(message: string, error: any): void {
    console.error(message, error);
    alert(message);
  }

  // Método para cancelar e voltar para a lista de pacientes
  cancel(): void {
    this.router.navigate(['/pacientes']);
  }
}
