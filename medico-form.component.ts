import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../services/medico.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Medico } from '../../models/medico.model';

@Component({
  selector: 'app-medico-form',
  templateUrl: './medico-form.component.html',
  styleUrls: ['./medico-form.component.css']
})
export class MedicoFormComponent implements OnInit {
  medicoForm: FormGroup;
  medicoId?: number;

  constructor(
    private fb: FormBuilder,
    private medicoService: MedicoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.medicoForm = this.fb.group({
      nome: ['', Validators.required],
      especialidade: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.medicoId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.medicoId) {
      this.carregarMedico();
    }
  }

  carregarMedico(): void {
    this.medicoService.buscarMedico(this.medicoId!).subscribe({
      next: (medico: Medico) => {
        this.medicoForm.patchValue(medico);
      },
      error: (err: any) => {
        console.error('Erro ao carregar médico:', err);
        alert('Erro ao carregar os dados do médico.');
        this.router.navigate(['/medicos']);
      }
    });
  }

  salvarMedico(): void {
    if (this.medicoForm.valid) {
      const medicoData = this.medicoForm.value;

      if (this.medicoId) {
        this.medicoService.atualizarMedico(this.medicoId, medicoData).subscribe({
          next: () => {
            alert('Médico atualizado com sucesso!');
            this.router.navigate(['/medicos']);
          },
          error: (err: any) => {
            console.error('Erro ao atualizar médico:', err);
            alert('Erro ao atualizar o médico.');
          }
        });
      } else {
        this.medicoService.adicionarMedico(medicoData).subscribe({
          next: () => {
            alert('Médico salvo com sucesso!');
            this.router.navigate(['/medicos']);
          },
          error: (err: any) => {
            console.error('Erro ao salvar médico:', err);
            alert('Erro ao salvar o médico.');
          }
        });
      }
    } else {
      alert('Preencha todos os campos obrigatórios.');
    }
  }

  cancelar(): void {
    this.router.navigate(['/medicos']);
  }
}
