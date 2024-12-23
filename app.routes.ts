import { Routes } from '@angular/router';
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { AgendamentoConsultaComponent } from './components/agendamento-consulta/agendamento-consulta.component';
import { LoginComponent } from './components/login/login.component';
import { MedicoListComponent } from './components/medico-list/medico-list.component';
import { MedicoFormComponent } from './components/medico-form/medico-form.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  // Rota para a tela de login
  { path: 'login', component: LoginComponent },

  // Rotas para a gestão de pacientes, protegidas pelo AuthGuard
  { path: 'pacientes', component: PacienteListComponent, canActivate: [AuthGuard] },
  { path: 'paciente/novo', component: PacienteFormComponent, canActivate: [AuthGuard] },
  { path: 'paciente/:id/editar', component: PacienteFormComponent, canActivate: [AuthGuard] },

  // Rota para o agendamento de consultas, protegida pelo AuthGuard
  { path: 'agendamento-consulta/:id', component: AgendamentoConsultaComponent, canActivate: [AuthGuard] },

  // Rotas para a gestão de médicos, protegidas pelo AuthGuard
  { path: 'medicos', component: MedicoListComponent, canActivate: [AuthGuard] },
  { path: 'medico/novo', component: MedicoFormComponent, canActivate: [AuthGuard] },
  { path: 'medico/:id/editar', component: MedicoFormComponent, canActivate: [AuthGuard] },

  // Redirecionamento padrão para a tela de login ao acessar a raiz
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Redirecionamento para qualquer rota inexistente, direcionando para a tela de login
  { path: '**', redirectTo: '/login' }
];
