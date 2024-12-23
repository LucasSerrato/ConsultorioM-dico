import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MedicoListComponent } from './components/medico-list/medico-list.component';
import { MedicoFormComponent } from './components/medico-form/medico-form.component';

// Importa componentes standalone diretamente
import { PacienteListComponent } from './components/paciente-list/paciente-list.component';
import { PacienteFormComponent } from './components/paciente-form/paciente-form.component';
import { AgendamentoConsultaComponent } from './components/agendamento-consulta/agendamento-consulta.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './services/auth.guard';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MedicoListComponent,
    MedicoFormComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    // Adicione componentes standalone aos imports
    PacienteListComponent,
    PacienteFormComponent,
    AgendamentoConsultaComponent,
    LoginComponent
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
