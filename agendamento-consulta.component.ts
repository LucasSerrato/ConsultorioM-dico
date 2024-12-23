import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgendamentoService } from '../../services/agendamento.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-agendamento-consulta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agendamento-consulta.component.html',
  styleUrls: ['./agendamento-consulta.component.css']
})
export class AgendamentoConsultaComponent implements OnInit {
  pacienteId: number | null = null;
  agendamentoForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private agendamentoService: AgendamentoService
  ) {
    // Inicialização do formulário de agendamento com validação
    this.agendamentoForm = this.fb.group({
      data: ['', Validators.required],
      hora: ['', Validators.required],  // Altere de "horario" para "hora" para alinhar com o HTML
      observacoes: ['']
    });
  }

  ngOnInit(): void {
    // Captura o ID do paciente da URL e converte para número
    const id = this.route.snapshot.paramMap.get('id');
    this.pacienteId = id ? +id : null;
  }

  // Método para salvar o agendamento
  agendarConsulta(): void {
    if (this.agendamentoForm.valid && this.pacienteId !== null) {
      // Construindo o objeto do agendamento
      const agendamento = {
        data: this.agendamentoForm.value.data,
        hora: this.agendamentoForm.value.hora,  // Use "hora" para alinhar com o campo no HTML
        observacoes: this.agendamentoForm.value.observacoes
      };

      // Envia o agendamento para o backend
      this.agendamentoService.addAgendamento(this.pacienteId, agendamento).subscribe({
        next: () => {
          alert('Consulta agendada com sucesso!');
          this.agendamentoForm.reset();
          this.router.navigate(['/pacientes']); // Redireciona para a lista de pacientes
        },
        error: (err) => {
          console.error('Erro ao agendar consulta:', err);
          alert('Erro ao agendar a consulta. Tente novamente mais tarde.');
        }
      });
    } else {
      alert('Por favor, preencha todos os campos obrigatórios do formulário.');
    }
  }
}
